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
  // Optional selected date range (start, end). If provided the chart will
  // aggregate at the day/month level instead of the hourly view.
  dateRange?: [Date | null, Date | null] | null;
}

export interface SerieItem {
  id: number;
  name: string;
  duration: string;
  type: string;
  color: string;
  hourlyData: {
    [hour: string]: number;
  };
}

export const seriesData: SerieItem[] = [
  {
    id: 1,
    name: "Serie A",
    duration: "A18 - 18 meses en ",
    type: "Tasa Fija E.A.",
    color: "#b22a09",
    hourlyData: {
      "8:00": 6200000,
      "9:00": 1350000,
      "10:00": 1500000,
      "11:00": 4680000,
      "12:00": 1850000,
      "13:00": 2000000,
      "14:00": 2180000,
      "15:00": 6350000,
      "16:00": 500000,
    },
  },
  {
    id: 2,
    name: "Serie B",
    duration: "B24 - 24 meses en ",
    type: "Tasa Fija E.A.",
    color: "#ff411c",
    hourlyData: {
      "8:00": 1500000,
      "9:00": 8700000,
      "10:00": 1900000,
      "11:00": 2100000,
      "12:00": 2300000,
      "13:00": 2500000,
      "14:00": 2700000,
      "15:00": 2900000,
      "16:00": 3100000,
    },
  },
  {
    id: 3,
    name: "Serie B",
    duration: "B72 - 72 meses en ",
    type: "IBR + Margen N.M.V.",
    color: "#ffa47f",
    hourlyData: {
      "8:00": 2000000,
      "9:00": 2250000,
      "10:00": 2500000,
      "11:00": 2750000,
      "12:00": 13000000,
      "13:00": 3250000,
      "14:00": 3500000,
      "15:00": 3750000,
      "16:00": 4000000,
    },
  },
  {
    id: 4,
    name: "Serie B",
    duration: "B96 - 96 meses en ",
    type: "Tasa Fija E.A.",
    color: "#FF8F00",
    hourlyData: {
      "8:00": 2500000,
      "9:00": 2800000,
      "10:00": 3100000,
      "11:00": 7400000,
      "12:00": 3700000,
      "13:00": 4000000,
      "14:00": 14300000,
      "15:00": 4600000,
      "16:00": 4900000,
    },
  },
  {
    id: 5,
    name: "Serie C",
    duration: "C24 - 24 meses en ",
    type: "Tasa Fija E.A.",
    color: "#3D3D3D",
    hourlyData: {
      "8:00": 3000000,
      "9:00": 4350000,
      "10:00": 6700000,
      "11:00": 2050000,
      "12:00": 5500000,
      "13:00": 2750000,
      "14:00": 8100000,
      "15:00": 5450000,
      "16:00": 9800000,
    },
  },
  {
    id: 6,
    name: "Serie C",
    duration: "B32 - 32 meses en ",
    type: "IPC + Margen E.A.",
    color: "#8F8F8F",
    hourlyData: {
      "8:00": 500000,
      "9:00": 7900000,
      "10:00": 2300000,
      "11:00": 8700000,
      "12:00": 5100000,
      "13:00": 5500000,
      "14:00": 5900000,
      "15:00": 9300000,
      "16:00": 16700000,
    },
  },
  {
    id: 7,
    name: "Serie C",
    duration: "A48 - 48 meses en ",
    type: "Tasa Fija E.A.",
    color: "#4dd0e1",
    hourlyData: {
      "8:00": 4000000,
      "9:00": 7450000,
      "10:00": 3900000,
      "11:00": 5350000,
      "12:00": 5800000,
      "13:00": 9250000,
      "14:00": 12700000,
      "15:00": 7150000,
      "16:00": 7600000,
    },
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

export function StackedBarChart({
  selectedSerieId,
  startTime,
  endTime,
  dateRange,
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

  // If a date range was provided, produce labels & datasets aggregated by
  // month/day. For the user's request we provide a deterministic example for
  // November -> December ranges so the chart demonstrates a period view.
  const isDateRangeActive =
    dateRange && Array.isArray(dateRange) && dateRange[0] && dateRange[1];

  const formatMonthLabel = (d: Date) =>
    d.toLocaleString("default", { month: "short", year: "numeric" });

  // Produce an array of month labels between start and end (inclusive).
  const getMonthlyLabelsBetween = (start: Date, end: Date) => {
    const labels: string[] = [];
    const cursor = new Date(start.getFullYear(), start.getMonth(), 1);
    const last = new Date(end.getFullYear(), end.getMonth(), 1);
    while (cursor <= last) {
      labels.push(formatMonthLabel(cursor));
      cursor.setMonth(cursor.getMonth() + 1);
    }
    return labels;
  };

  // Deterministic aggregator for example/demo: create monthly totals based on
  // the series' existing hourly totals but scaled per-month so results are
  // stable and easy to reason about.
  const makeMonthlyDataForSeries = (
    serie: (typeof seriesData)[number],
    monthlyLabels: string[]
  ) => {
    // Sum up hourly values as a base seed
    const hourlySum = Object.values(serie.hourlyData).reduce(
      (a, b) => a + b,
      0
    );

    // Distribute the base sum across the months with deterministic multipliers
    // so November / December example produces visibly different bars.
    const multipliers = monthlyLabels.map((lab, idx) => 1 + idx * 0.6); // 1.0, 1.6, ...

    return monthlyLabels.map((_, idx) =>
      Math.round(hourlySum * multipliers[idx])
    );
  };

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

  let data = {
    labels: filteredTimeLabels,
    datasets: filteredSeriesData.map((serie) => ({
      label: `${serie.duration}${serie.type}`,
      data: filteredTimeLabels.map((time) => serie.hourlyData[time] || 0), // ← Obtener datos por hora
      backgroundColor: serie.color,
      borderWidth: 0,
    })),
  };

  // If the user picked a date range, switch to a period view (monthly/day).
  if (isDateRangeActive) {
    const [start, end] = dateRange as [Date, Date];

    // For ranges spanning full months we show monthly aggregation (Nov, Dec)
    const monthLabels = getMonthlyLabelsBetween(start, end);

    data = {
      labels: monthLabels,
      datasets: filteredSeriesData.map((serie) => ({
        label: `${serie.duration}${serie.type}`,
        data: makeMonthlyDataForSeries(serie, monthLabels),
        backgroundColor: serie.color,
        borderWidth: 0,
      })),
    };
  }

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
