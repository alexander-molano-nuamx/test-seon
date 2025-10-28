"use client";

import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { Bar } from "react-chartjs-2";
import { Card, CardContent, Box } from "@mui/material";

// Registrar el plugin de anotaciones
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

interface StackedBarChartProps {
  selectedSerieId?: number | null;
  startTime?: Date | null;
  endTime?: Date | null;
}

export interface SerieItem {
  id: number;
  name: string;
  duration: string;
  type: string;
  color: string;
}

export const seriesData: SerieItem[] = [
  {
    id: 1,
    name: "Serie A",
    duration: "A18 - 18 meses en ",
    type: "Tasa Fija E.A.",
    color: "#b22a09",
  },
  {
    id: 2,
    name: "Serie B",
    duration: "B24 - 24 meses en ",
    type: "Tasa Fija E.A.",
    color: "#ff411c",
  },
  {
    id: 3,
    name: "Serie B",
    duration: "B72 - 72 meses en ",
    type: "IBR + Margen N.M.V.",
    color: "#ffa47f",
  },
  {
    id: 4,
    name: "Serie B",
    duration: "B96 - 96 meses en ",
    type: "Tasa Fija E.A.",
    color: "#FF8F00",
  },
  {
    id: 5,
    name: "Serie C",
    duration: "C24 - 24 meses en ",
    type: "Tasa Fija E.A.",
    color: "#3D3D3D",
  },
  {
    id: 6,
    name: "Serie C",
    duration: "B32 - 32 meses en ",
    type: "IPC + Margen E.A.",
    color: "#8F8F8F",
  },
  {
    id: 7,
    name: "Serie C",
    duration: "A48 - 48 meses en ",
    type: "Tasa Fija E.A.",
    color: "#4dd0e1",
  },
];

export const timeLabels = [
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

const generateDataForSerie = (baseValue: number, growth: number) => {
  return timeLabels.map((_, index) => baseValue + growth * index);
};

export function StackedBarChart({
  selectedSerieId,
  startTime,
  endTime,
}: StackedBarChartProps = {}) {
  // Limpiar tooltip al desmontar
  useEffect(() => {
    return () => {
      const tooltipEl = document.getElementById("chartjs-tooltip");
      if (tooltipEl && tooltipEl.parentNode) {
        tooltipEl.parentNode.removeChild(tooltipEl);
      }
    };
  }, []);

  const filteredSeriesData =
    selectedSerieId && selectedSerieId !== 0
      ? seriesData.filter((s) => s.id === selectedSerieId)
      : seriesData;

  const getFilteredTimeLabels = () => {
    if (!startTime || !endTime) return timeLabels;

    const startHour = startTime.getHours();
    const endHour = endTime.getHours();

    return timeLabels.filter((label) => {
      const hour = parseInt(label.split(":")[0]);
      return hour >= startHour && hour <= endHour;
    });
  };

  const filteredTimeLabels = getFilteredTimeLabels();

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        position: "nearest",
        external: function (context) {
          // Tooltip Element
          let tooltipEl = document.getElementById("chartjs-tooltip");

          // Crear elemento si no existe
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "chartjs-tooltip";
            tooltipEl.style.background = "#fff";
            tooltipEl.style.border = "1px solid rgba(0,0,0,0.15)";
            tooltipEl.style.borderRadius = "8px";
            tooltipEl.style.color = "#000";
            tooltipEl.style.opacity = "0";
            tooltipEl.style.pointerEvents = "none";
            tooltipEl.style.position = "absolute";
            tooltipEl.style.transition = "all .1s ease";
            tooltipEl.style.padding = "20px";
            tooltipEl.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            tooltipEl.style.minWidth = "350px";
            tooltipEl.style.zIndex = "1000";
            document.body.appendChild(tooltipEl);
          }

          // Ocultar si no hay tooltip
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = "0";
            return;
          }

          // Construir contenido
          // Construir contenido
          if (tooltipModel.body) {
            const bodyLines = tooltipModel.dataPoints;

            let innerHtml =
              '<div style="display: flex; flex-direction: column; gap: 12px;">';

            bodyLines.forEach((dataPoint, i) => {
              const serie = filteredSeriesData[dataPoint.datasetIndex];
              const value = dataPoint.parsed.y;
              const millions = (value! / 1000000).toFixed(3);

              innerHtml += `
      <div>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
          <span style="
            display: inline-block;
            width: 40px;
            height: 8px;
            background: ${serie.color};
            border-radius: 2px;
          "></span>
          <span style="font-size: 14px; color: #000; font-weight: 500; font-family: 'Roboto', sans-serif;">
            ${dataPoint.datasetIndex + 1}. ${serie.name} ${serie.duration}${
                serie.type
              }
          </span>
        </div>
        <div style="font-size: 14px; color: #666; padding-left: 48px; font-family: 'Roboto', sans-serif;">
          Cantidad Total Ofertado ${millions}
        </div>
      </div>
    `;
            });

            innerHtml += "</div>";
            tooltipEl.innerHTML = innerHtml;
          }
          const position = context.chart.canvas.getBoundingClientRect();

          // Calcular posición inicial
          let left = position.left + window.pageXOffset + tooltipModel.caretX;
          let top = position.top + window.pageYOffset + tooltipModel.caretY;

          // Hacer visible para obtener dimensiones
          tooltipEl.style.opacity = "1";
          const tooltipWidth = tooltipEl.offsetWidth;
          const tooltipHeight = tooltipEl.offsetHeight;

          // Obtener dimensiones de la ventana
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          const scrollX = window.pageXOffset;
          const scrollY = window.pageYOffset;

          // Margen de seguridad
          const margin = 20;

          // Ajustar posición horizontal
          // Si el tooltip se sale por la derecha
          if (left + tooltipWidth > scrollX + windowWidth) {
            left = scrollX + windowWidth - tooltipWidth - margin;
          }

          // Si el tooltip se sale por la izquierda
          if (left < scrollX) {
            left = scrollX + margin;
          }

          // Ajustar posición vertical
          // Si el tooltip se sale por abajo
          if (top + tooltipHeight > scrollY + windowHeight) {
            top = scrollY + windowHeight - tooltipHeight - margin;
          }

          // Si el tooltip se sale por arriba
          if (top < scrollY) {
            top = scrollY + margin;
          }

          // Aplicar posiciones ajustadas
          tooltipEl.style.left = left + "px";
          tooltipEl.style.top = top + "px";
          tooltipEl.style.fontFamily = "'Roboto', sans-serif";
          tooltipEl.style.fontSize = "14px";
        },
      },
      annotation: {
        annotations: {
          lineMaximo: {
            type: "line",
            yMin: 60000000,
            yMax: 60000000,
            borderColor: "#0E9753",
            borderWidth: 2,
            borderDash: [10, 5],
            label: {
              display: false,
              content: "Máximo Total Ofertado",
              position: "end",
              backgroundColor: "#0E9753",
              color: "#fff",
              font: {
                size: 11,
              },
              padding: 4,
            },
          },
          lineTotalOfertado: {
            type: "line",
            yMin: 50000000,
            yMax: 50000000,
            borderColor: "#FFA47F",
            borderWidth: 2,
            borderDash: [10, 5],
            label: {
              display: false,
              content: "Total Ofertado",
              position: "end",
              backgroundColor: "#FFA47F",
              color: "#fff",
              font: {
                size: 11,
              },
              padding: 4,
            },
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `${(Number(value) / 1000000).toFixed(0)} MIL`;
          },
          font: {
            size: 11,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
    interaction: {
      mode: "point",
      intersect: true,
    },
  };

  const data = {
    labels: filteredTimeLabels, // ← Cambiado de timeLabels
    datasets: filteredSeriesData.map((serie, index) => ({
      label: `${serie.duration}${serie.type}`,
      data: generateDataForSerie(
        1000000 + index * 500000,
        300000 + index * 100000
      ).slice(0, filteredTimeLabels.length), // ← Agregar slice para ajustar longitud
      backgroundColor: serie.color,
      borderWidth: 0,
    })),
  };

  return (
    <Card sx={{ border: "1px solid rgba(0,0,0,0.12)", height: "100%" }}>
      <CardContent sx={{ p: 2, height: "100%" }}>
        <Box sx={{ height: "400px" }}>
          <Bar options={options} data={data} />
        </Box>
      </CardContent>
    </Card>
  );
}
