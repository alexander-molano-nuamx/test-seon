import svgPaths from "./svg-1kcwt46gel";
import imgAvatar from "figma:asset/74aedc1b34b232c008889bda3b1a72a9d2324cca.png";
import imgBbva2019Svg1 from "figma:asset/bb2c82a82819b0bec1b4e5ccda1fa3cd72005928.png";
import imgLogoHeaderV21 from "figma:asset/7974c4d33d7bedba9caf648b5576ae0f169251eb.png";
import imgImage8 from "figma:asset/975736194eed80d621c3806a81f489de2504d587.png";
import imgBtgLogoBlueSvg1 from "figma:asset/ff4059e851c20a067bf16b6aa6d393750ee16476.png";
import imgInteligoBank20121 from "figma:asset/9f3b1695e1276aafa591df7bfa37d647630d9e70.png";
import img15815436544381 from "figma:asset/8ba573bd96527c2e562e10d516537add87b05042.png";
import imgLogoScotiabankKanadaSvg1 from "figma:asset/964c0bcce7fe3932f397981ba1a6a121262c01d4.png";
import imgLogoLigth1 from "figma:asset/118726c5ba669f123bbdba2349017c86f4bf495a.png";

function MenuRounded() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-[24.511px]" data-name="MenuRounded">
      <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 12">
          <path d={svgPaths.p3174fb00} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Brand() {
  return (
    <div className="h-[24px] relative shrink-0 w-[108.939px]" data-name="Brand">
      <div className="absolute bottom-[-1.45%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 109 25">
          <g id="Brand">
            <path d={svgPaths.p12d15b00} fill="var(--fill-0, #FD441E)" id="Vector" />
            <path d={svgPaths.p6df7180} fill="var(--fill-0, #FD441E)" id="Vector_2" />
            <path d={svgPaths.p2f239900} fill="var(--fill-0, #FD441E)" id="Vector_3" />
            <path d={svgPaths.p36fe9900} fill="var(--fill-0, #FD441E)" id="Vector_4" />
            <path d={svgPaths.pf276a00} fill="var(--fill-0, #FD441E)" id="Vector_5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0 w-[400px]" data-name="section">
      <MenuRounded />
      <Brand />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center justify-center relative shrink-0" data-name="icon">
      <div className="relative shrink-0 size-[5px]" data-name=".">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <path d={svgPaths.p1d8f5800} fill="var(--fill-0, #3D3D3D)" id="." />
        </svg>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[580px]" data-name="section">
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3d3d3d] text-[18px] text-center text-nowrap whitespace-pre">{`SEOn `}</p>
      <div className="flex flex-row items-center self-stretch">
        <Icon />
      </div>
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3d3d3d] text-[18px] text-center text-nowrap whitespace-pre">Kallpa</p>
    </div>
  );
}

function CalendarTodayRounded() {
  return (
    <div className="h-[24px] relative shrink-0 w-[24.511px]" data-name="CalendarTodayRounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 24">
        <g id="CalendarTodayRounded">
          <path d={svgPaths.p3a34d700} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="date">
      <CalendarTodayRounded />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#3d3d3d] text-[12px] text-center tracking-[0.4px] w-[69.449px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        02/01/2025
      </p>
    </div>
  );
}

function TimeCircle() {
  return (
    <div className="absolute inset-[11.46%]" data-name="Time Circle">
      <div className="absolute inset-[-4.05%_-3.97%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Time Circle">
            <path d={svgPaths.p1f907680} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.56" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TimeCircle1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[24.511px]" data-name="Time Circle">
      <TimeCircle />
    </div>
  );
}

function Hour() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="hour">
      <TimeCircle1 />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#3d3d3d] text-[12px] text-center tracking-[0.4px] w-[69.449px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        08:00 am
      </p>
    </div>
  );
}

function DarkMode() {
  return (
    <div className="h-[24px] relative shrink-0 w-[24.511px]" data-name="dark_mode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 24">
        <g id="dark_mode">
          <path d={svgPaths.pb2b9480} fill="var(--fill-0, #3D3D3D)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LanguageRounded() {
  return (
    <div className="h-[24px] relative shrink-0 w-[24.511px]" data-name="LanguageRounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 24">
        <g id="LanguageRounded">
          <path d={svgPaths.p332b6c00} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MinWidth() {
  return <div className="size-[24px]" data-name="min-width" />;
}

function MinWidth1() {
  return <div className="rounded-[100px] shrink-0 size-[8px]" data-name="min-width" />;
}

function Badge() {
  return (
    <div className="absolute bg-[#2e7d32] content-stretch flex gap-[10px] items-start left-1/2 overflow-clip rounded-[100px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="<Badge>">
      <MinWidth1 />
    </div>
  );
}

function Border() {
  return (
    <div className="absolute bg-white bottom-[-6px] right-[-6px] rounded-[100px] size-[12px]" data-name="border">
      <Badge />
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0" data-name="<Avatar>">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[100px] size-full" src={imgAvatar} />
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-[24px]">
        <div className="flex-none rotate-[270deg]">
          <MinWidth />
        </div>
      </div>
      <Border />
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[105.023px]" data-name="icons">
      <DarkMode />
      <LanguageRounded />
      <Avatar />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex gap-[25px] items-center justify-end relative shrink-0 w-[400px]" data-name="section">
      <Date />
      <Hour />
      <Icons />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="container">
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-[56px] items-start px-[16px] py-[10px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[1438px]" data-name="header1">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <Container />
    </div>
  );
}

function Category2() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Category">
      <div className="absolute inset-[-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Category">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p25440100} fillRule="evenodd" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.56" strokeWidth="1.5" />
              <path clipRule="evenodd" d={svgPaths.p2923af00} fillRule="evenodd" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.56" strokeWidth="1.5" />
              <path clipRule="evenodd" d={svgPaths.p14b27470} fillRule="evenodd" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.56" strokeWidth="1.5" />
              <path clipRule="evenodd" d={svgPaths.p3e36f480} fillRule="evenodd" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.56" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Category3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Category">
      <Category2 />
    </div>
  );
}

function LeftContent6() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[56px] relative shrink-0" data-name="Left Content">
      <Category3 />
    </div>
  );
}

function ListItemText6() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="ListItem Text">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dashboard
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <LeftContent6 />
          <ListItemText6 />
        </div>
      </div>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="<ListItem>">
      <Container7 />
    </div>
  );
}

function CustomExpandableNavItem3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="_Custom / Expandable Nav Item">
      <ListItem6 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[11.46%_11.5%_12.54%_11.46%]">
      <div className="absolute inset-[-4.11%_-4.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
          <g id="Group 8">
            <path d={svgPaths.p2ef4ea00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.56" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Work2() {
  return (
    <div className="absolute contents inset-[11.46%_11.5%_12.54%_11.46%]" data-name="Work">
      <Group9 />
    </div>
  );
}

function Work3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Work">
      <Work2 />
    </div>
  );
}

function LeftContent7() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[56px] relative shrink-0" data-name="Left Content">
      <Work3 />
    </div>
  );
}

function ListItemText7() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="ListItem Text">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.15px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`Resumen de `}</p>
        <p>operaciones</p>
      </div>
    </div>
  );
}

function ExpandLessFilled1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ExpandLessFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ExpandLessFilled">
          <path d={svgPaths.p2b8d2f00} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <ExpandLessFilled1 />
    </div>
  );
}

function RightAction2() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="Right Action">
      <Icon8 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <LeftContent7 />
          <ListItemText7 />
          <RightAction2 />
        </div>
      </div>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="<ListItem>">
      <Container8 />
    </div>
  );
}

function ListItemText8() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="ListItem Text">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`Parametrización de `}</p>
        <p>operaciones</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[4px] relative w-full">
          <ListItemText8 />
        </div>
      </div>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="<ListItem>">
      <div className="overflow-clip size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[56px] pr-0 py-0 relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function CustomExpandableNavItem4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Custom / Expandable Nav Item">
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Component2User() {
  return (
    <div className="absolute inset-[13.54%_11.54%_13.3%_11.46%]" data-name="2 User">
      <div className="absolute inset-[-4.27%_-4.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
          <g id="2 User">
            <path d={svgPaths.p39a2400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.56" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component2User1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="2 User">
      <Component2User />
    </div>
  );
}

function LeftContent9() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[56px] relative shrink-0" data-name="Left Content">
      <Component2User1 />
    </div>
  );
}

function ListItemText9() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="ListItem Text">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.15px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Administrador</p>
        <p>de Usuarios</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <LeftContent9 />
          <ListItemText9 />
        </div>
      </div>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="<ListItem>">
      <Container10 />
    </div>
  );
}

function CustomExpandableNavItem5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Custom / Expandable Nav Item">
      <ListItem9 />
    </div>
  );
}

function AddUser() {
  return (
    <div className="absolute inset-[11.46%_11.46%_12.31%_11.46%]" data-name="Add User">
      <div className="absolute inset-[-4.1%_-4.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Add User">
            <path d={svgPaths.p22a6ac40} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.56" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AddUser1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add User">
      <AddUser />
    </div>
  );
}

function LeftContent10() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[56px] relative shrink-0" data-name="Left Content">
      <AddUser1 />
    </div>
  );
}

function ListItemText10() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="ListItem Text">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.15px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`Administrador y `}</p>
        <p>Gestión de Roles</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <LeftContent10 />
          <ListItemText10 />
        </div>
      </div>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="<ListItem>">
      <Container11 />
    </div>
  );
}

function CustomExpandableNavItem6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Custom / Expandable Nav Item">
      <ListItem10 />
    </div>
  );
}

function AddUser2() {
  return (
    <div className="absolute inset-[11.46%_11.46%_12.31%_11.46%]" data-name="Add User">
      <div className="absolute inset-[-4.1%_-4.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Add User">
            <path d={svgPaths.p22a6ac40} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.56" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AddUser3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add User">
      <AddUser2 />
    </div>
  );
}

function LeftContent11() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[56px] relative shrink-0" data-name="Left Content">
      <AddUser3 />
    </div>
  );
}

function ListItemText11() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-0 py-[4px] relative shrink-0" data-name="ListItem Text">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ff4201] text-[16px] text-nowrap tracking-[0.15px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`Gestión de `}</p>
        <p className="mb-0">{`Aceptaciones `}</p>
        <p>y Cesiones</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <LeftContent11 />
          <ListItemText11 />
        </div>
      </div>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="bg-[rgba(255,66,1,0.08)] content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="<ListItem>">
      <Container12 />
    </div>
  );
}

function CustomExpandableNavItem7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Custom / Expandable Nav Item">
      <ListItem11 />
    </div>
  );
}

function Ul1() {
  return (
    <div className="relative shrink-0 w-full" data-name="ul">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[8px] relative w-full">
          <CustomExpandableNavItem3 />
          <CustomExpandableNavItem4 />
          <CustomExpandableNavItem5 />
          <CustomExpandableNavItem6 />
          <CustomExpandableNavItem7 />
        </div>
      </div>
    </div>
  );
}

function CustomSidenav1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start overflow-clip relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)] shrink-0 w-[256px]" data-name="_Custom / Sidenav">
      <Ul1 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ff3700] text-[14px] text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.57] whitespace-pre">{`Gestión de Aceptaciones y Cesiones `}</p>
      </div>
      <div className="bg-[#ff411c] h-px shrink-0 w-full" data-name="Underline" />
    </div>
  );
}

function Breadcrumb1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="breadcrumb">
      <Text />
    </div>
  );
}

function Breadcrumb2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[545px]" data-name="breadcrumb">
      <Breadcrumb1 />
    </div>
  );
}

function PageHeaderMain() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="page-header-main">
      <Breadcrumb2 />
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[24px] text-[rgba(0,0,0,0.87)] w-[571px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.334]">Gestión de Aceptaciones y Cesiones</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[21.146px] items-center relative shrink-0" data-name="text">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d3d3d] text-[14px] text-nowrap tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] whitespace-pre">Último Inicio de Sesión:</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d3d3d] text-[14px] text-nowrap tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] whitespace-pre">Martes, 13 de mayo 2:00pm</p>
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-name="span">
      <Text1 />
      <div className="flex flex-row items-center self-stretch">
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d3d3d] text-[14px] text-nowrap tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] whitespace-pre">171.112.111</p>
      </div>
    </div>
  );
}

function TextIp() {
  return (
    <div className="content-stretch flex gap-[4px] h-[23px] items-center relative shrink-0" data-name="text IP">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d3d3d] text-[14px] tracking-[0.17px] w-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43]">IP:</p>
      </div>
      <Text3 />
    </div>
  );
}

function Span1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-name="span">
      <TextIp />
    </div>
  );
}

function UserSessionInfo() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="user-session-info">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[8px] py-0 relative size-full">
          <Span />
          <Span1 />
        </div>
      </div>
    </div>
  );
}

function Head1() {
  return (
    <div className="content-stretch flex h-[71px] items-start relative shrink-0 w-full" data-name="head1">
      <PageHeaderMain />
      <UserSessionInfo />
    </div>
  );
}

function Migas() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-0 py-[16px] relative shrink-0 w-full z-[7]" data-name="migas">
      <Head1 />
    </div>
  );
}

function SearchFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SearchFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SearchFilled">
          <path d={svgPaths.p89aed78} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AdornStartContainer() {
  return (
    <div className="box-border content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="Adorn. Start Container">
      <SearchFilled />
    </div>
  );
}

function Content() {
  return (
    <div className="box-border content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0 w-full" data-name="Content">
      <AdornStartContainer />
      <p className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Buscar Promotor
      </p>
    </div>
  );
}

function Input() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 z-[7]" data-name="<TextField>">
      <Input />
    </div>
  );
}

function MinHeight2() {
  return <div className="h-[24px] shrink-0" data-name="min-height" style={{ width: "1.04907e-06px" }} />;
}

function MinWidth2() {
  return <div className="h-0 shrink-0 w-[24px]" data-name="min-width" />;
}

function Calendar2() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Calendar">
      <div className="absolute inset-[-3.75%_-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
          <g id="Calendar">
            <path d={svgPaths.p227feb80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.56" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Calendar3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Calendar">
      <Calendar2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="box-border content-stretch flex items-center overflow-clip px-0 py-[8px] relative shrink-0 w-full" data-name="Container">
      <MinHeight2 />
      <div className="basis-0 flex flex-col font-['Roboto:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Fechas de Final de Recepción de Aceptaci..</p>
      </div>
      <MinWidth2 />
      <Calendar3 />
    </div>
  );
}

function Input1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 z-[5]" data-name="<Select>">
      <Input1 />
    </div>
  );
}

function MinHeight3() {
  return <div className="h-[24px] shrink-0" data-name="min-height" style={{ width: "1.04907e-06px" }} />;
}

function MinWidth3() {
  return <div className="h-0 shrink-0 w-[24px]" data-name="min-width" />;
}

function ArrowDropDownFilled() {
  return (
    <div className="absolute right-[-0.33px] size-[24px] top-1/2 translate-y-[-50%]" data-name="ArrowDropDownFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ArrowDropDownFilled">
          <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="box-border content-stretch flex items-center overflow-clip px-0 py-[8px] relative shrink-0 w-full" data-name="Container">
      <MinHeight3 />
      <div className="basis-0 flex flex-col font-['Roboto:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Estado</p>
      </div>
      <MinWidth3 />
      <ArrowDropDownFilled />
    </div>
  );
}

function Input2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Select1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 z-[4]" data-name="<Select>">
      <Input2 />
    </div>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex gap-[16px] isolate items-center relative shrink-0 w-full" data-name="Filters">
      <TextField />
      <Select />
      <Select1 />
    </div>
  );
}

function FilterActions() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-0 py-[16px] relative shrink-0 w-full z-[3]" data-name="filter Actions">
      <Filters />
    </div>
  );
}

function Calendar4() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Calendar">
      <div className="absolute inset-[-5%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17">
          <g id="Calendar">
            <path d={svgPaths.pfca1e00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Calendar5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Calendar">
      <Calendar4 />
    </div>
  );
}

function Typography() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="<Typography>">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] text-center text-nowrap tracking-[0.15px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fecha final de gestión de aceptaciones: 5 de Octubre 2025
      </p>
    </div>
  );
}

function Frame3878() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Calendar5 />
      <Typography />
    </div>
  );
}

function Frame3879() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Frame3878 />
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 bg-[#f4f4f4] grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Card">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[10px] py-[12px] relative w-full">
          <Frame3879 />
        </div>
      </div>
    </div>
  );
}

function Paper() {
  return (
    <div className="absolute inset-[11.46%_17.49%_12.02%_17.71%]" data-name="Paper">
      <div className="absolute inset-[-5.45%_-6.43%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
          <g id="Paper">
            <path d={svgPaths.p3cf4b000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Paper1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Paper">
      <Paper />
    </div>
  );
}

function Typography2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="<Typography>">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-[rgba(0,0,0,0.87)] text-center text-nowrap tracking-[0.15px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.43] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Cantidad de operaciones:
        </span>
        <span className="leading-[1.5] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` 50`}</span>
      </p>
    </div>
  );
}

function Frame3881() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Paper1 />
      <Typography2 />
    </div>
  );
}

function Frame3906() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full">
      <Frame3881 />
    </div>
  );
}

function Frame3880() {
  return (
    <div className="basis-0 bg-[#f4f4f4] content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full">
      <Frame3906 />
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow h-full items-start min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="card">
      <div aria-hidden="true" className="absolute border-[#f4f4f4] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame3880 />
    </div>
  );
}

function Card2() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center pb-[8px] pt-[4px] px-0 relative shrink-0 w-full z-[2]" data-name="card">
      <Card />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Card1 />
      </div>
    </div>
  );
}

function Category4() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Category">
      <div className="absolute inset-[-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Category">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p25440100} fillRule="evenodd" stroke="var(--stroke-0, #FF4201)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path clipRule="evenodd" d={svgPaths.p2923af00} fillRule="evenodd" stroke="var(--stroke-0, #FF4201)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path clipRule="evenodd" d={svgPaths.p14b27470} fillRule="evenodd" stroke="var(--stroke-0, #FF4201)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path clipRule="evenodd" d={svgPaths.p3e36f480} fillRule="evenodd" stroke="var(--stroke-0, #FF4201)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Category5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Category">
      <Category4 />
    </div>
  );
}

function Frame3891() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Category5 />
    </div>
  );
}

function Filtrer() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0 w-full" data-name="Filtrer">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] text-center text-nowrap tracking-[0.15px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ver
      </p>
      <Frame3891 />
    </div>
  );
}

function ViewColumnFilled3() {
  return (
    <div className="absolute left-[-2px] size-[18px] top-0" data-name="ViewColumnFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ViewColumnFilled">
          <path d={svgPaths.p22d7780} fill="var(--fill-0, #FF411C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon5() {
  return (
    <div className="h-[24px] min-h-[24px] relative shrink-0 w-[16px]" data-name="Masked Icon">
      <ViewColumnFilled3 />
    </div>
  );
}

function Base3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon5 />
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#ff411c] text-[13px] text-nowrap tracking-[0.46px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        columnas
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="box-border content-stretch flex flex-col items-end justify-center overflow-clip px-[5px] py-[4px] relative rounded-[4px] shrink-0" data-name="<Button>">
      <Base3 />
    </div>
  );
}

function FilterListFilled() {
  return (
    <div className="absolute left-[-2px] size-[18px] top-0" data-name="FilterListFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="FilterListFilled">
          <path d={svgPaths.p272d4800} fill="var(--fill-0, #FF411C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon6() {
  return (
    <div className="h-[24px] min-h-[24px] relative shrink-0 w-[16px]" data-name="Masked Icon">
      <FilterListFilled />
    </div>
  );
}

function Base4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon6 />
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#ff411c] text-[13px] text-nowrap tracking-[0.46px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        filtros
      </p>
    </div>
  );
}

function Button4() {
  return (
    <div className="box-border content-stretch flex flex-col items-end justify-center overflow-clip px-[5px] py-[4px] relative rounded-[4px] shrink-0" data-name="<Button>">
      <Base4 />
    </div>
  );
}

function CachedFilled() {
  return (
    <div className="absolute left-[-2px] size-[18px] top-0" data-name="CachedFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="CachedFilled">
          <path d={svgPaths.p220d7100} fill="var(--fill-0, #FF411C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon7() {
  return (
    <div className="h-[24px] min-h-[24px] relative shrink-0 w-[16px]" data-name="Masked Icon">
      <CachedFilled />
    </div>
  );
}

function Base5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon7 />
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#ff411c] text-[13px] text-nowrap tracking-[0.46px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Actualizar
      </p>
    </div>
  );
}

function Button5() {
  return (
    <div className="box-border content-stretch flex flex-col items-end justify-center overflow-clip px-[5px] py-[4px] relative rounded-[4px] shrink-0" data-name="<Button>">
      <Base5 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="<Actions>">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function MoreVert24DpE8EaedFill0Wght400Grad0Opsz241() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_vert_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_vert_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p34810300} fill="var(--fill-0, #FF4201)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GridToolbarQuickFilterTableOpciones() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="<GridToolbarQuickFilter> table opciones">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex items-center justify-end px-[16px] py-0 relative w-full">
          <Actions1 />
          <MoreVert24DpE8EaedFill0Wght400Grad0Opsz241 />
        </div>
      </div>
    </div>
  );
}

function Head13() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="head13">
      <GridToolbarQuickFilterTableOpciones />
    </div>
  );
}

function ColumnHeader() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative shrink-0 w-[150px]" data-name="Column Header">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Detalles
      </p>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Table Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader />
    </div>
  );
}

function ColumnHeader1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[#ff3700] text-[14px] text-nowrap tracking-[0.17px] underline whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Ver Detalles
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader1 />
    </div>
  );
}

function TableContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Content">
      {[...Array(10).keys()].map((_, i) => (
        <TableRow key={i} />
      ))}
    </div>
  );
}

function ColumnDetalles() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[174px]" data-name="column Detalles">
      <TableHeader />
      <TableContent />
    </div>
  );
}

function ColumnHeader11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Estado
          </p>
        </div>
      </div>
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Table Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader11 />
    </div>
  );
}

function Typography3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] py-0 relative shrink-0" data-name="Typography">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.16px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Vigente
      </p>
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[rgba(46,125,50,0.3)] box-border content-stretch flex items-center overflow-clip p-[4px] relative rounded-[100px] shrink-0" data-name="<Chip>">
      <Typography3 />
    </div>
  );
}

function ColumnHeader12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <Chip />
        </div>
      </div>
    </div>
  );
}

function TableRow10() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader12 />
    </div>
  );
}

function Typography4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] py-0 relative shrink-0" data-name="Typography">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.16px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cerrada
      </p>
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] box-border content-stretch flex items-center overflow-clip p-[4px] relative rounded-[100px] shrink-0" data-name="<Chip>">
      <Typography4 />
    </div>
  );
}

function ColumnHeader13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <Chip1 />
        </div>
      </div>
    </div>
  );
}

function TableRow11() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader13 />
    </div>
  );
}

function Typography6() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] py-0 relative shrink-0" data-name="Typography">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.16px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Finalizada
      </p>
    </div>
  );
}

function Chip3() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] box-border content-stretch flex items-center overflow-clip p-[4px] relative rounded-[100px] shrink-0" data-name="<Chip>">
      <Typography6 />
    </div>
  );
}

function ColumnHeader15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <Chip3 />
        </div>
      </div>
    </div>
  );
}

function TableRow13() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader15 />
    </div>
  );
}

function Typography7() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] py-0 relative shrink-0" data-name="Typography">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.16px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cerrada
      </p>
    </div>
  );
}

function Chip4() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] box-border content-stretch flex items-center overflow-clip p-[4px] relative rounded-[100px] shrink-0" data-name="<Chip>">
      <Typography7 />
    </div>
  );
}

function EstadosSolid() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="estados solid">
      <Chip4 />
    </div>
  );
}

function ColumnHeader16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <EstadosSolid />
        </div>
      </div>
    </div>
  );
}

function TableRow14() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader16 />
    </div>
  );
}

function Typography8() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center min-h-[24px] px-[6px] py-0 relative shrink-0" data-name="Typography">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.16px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Adjudicada
      </p>
    </div>
  );
}

function Chip5() {
  return (
    <div className="bg-[#f8e2da] box-border content-stretch flex items-center overflow-clip p-[4px] relative rounded-[100px] shrink-0" data-name="<Chip>">
      <Typography8 />
    </div>
  );
}

function ColumnHeader17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <Chip5 />
        </div>
      </div>
    </div>
  );
}

function TableRow15() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader17 />
    </div>
  );
}

function TableContent1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Content">
      <TableRow10 />
      <TableRow11 />
      <TableRow10 />
      <TableRow13 />
      <TableRow14 />
      <TableRow15 />
      <TableRow11 />
      <TableRow11 />
      <TableRow11 />
      <TableRow13 />
    </div>
  );
}

function ColumnEstado() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[174px]" data-name="column Estado">
      <TableHeader1 />
      <TableContent1 />
    </div>
  );
}

function ColumnHeader22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Emisor
          </p>
        </div>
      </div>
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader22 />
    </div>
  );
}

function Bbva() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="BBVA">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start justify-center pl-[5px] pr-[10px] py-[10px] relative w-full">
          <div className="h-[14px] relative shrink-0 w-[47px]" data-name="BBVA_2019.svg 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBbva2019Svg1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[79px]" data-name="logo2">
      <Bbva />
    </div>
  );
}

function ColumnHeader23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <Logo2 />
        </div>
      </div>
    </div>
  );
}

function TableRow20() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader23 />
    </div>
  );
}

function CredicorpCapital() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="credicorp capital">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start justify-center pl-[5px] pr-[10px] py-[10px] relative w-full">
          <div className="h-[16px] relative shrink-0 w-[74px]" data-name="logo-header-v2 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[-5.26%] max-w-none top-0 w-[105.26%]" src={imgLogoHeaderV21} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="logo2">
      <CredicorpCapital />
    </div>
  );
}

function ColumnHeader24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <Logo3 />
        </div>
      </div>
    </div>
  );
}

function TableRow21() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader24 />
    </div>
  );
}

function Kallpa() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start justify-center pl-[5px] pr-[10px] py-[10px] relative shrink-0 w-[68px]" data-name="kallpa">
      <div className="h-[27px] relative shrink-0 w-[55px]" data-name="image 8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[143.45%] left-[-10.42%] max-w-none top-[-16.29%] w-[116.67%]" src={imgImage8} />
        </div>
      </div>
    </div>
  );
}

function Logo4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="logo2">
      <Kallpa />
    </div>
  );
}

function ColumnHeader25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <Logo4 />
        </div>
      </div>
    </div>
  );
}

function TableRow22() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader25 />
    </div>
  );
}

function BgtPactual() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="bgt pactual">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start justify-center pl-[5px] pr-[10px] py-[10px] relative w-full">
          <div className="h-[22px] relative shrink-0 w-[56px]" data-name="Btg-logo-blue.svg 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBtgLogoBlueSvg1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="logo2">
      <BgtPactual />
    </div>
  );
}

function ColumnHeader26() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <Logo5 />
        </div>
      </div>
    </div>
  );
}

function TableRow23() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader26 />
    </div>
  );
}

function Inteligo() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start justify-center pl-[5px] pr-[10px] py-[10px] relative shrink-0 w-[90px]" data-name="inteligo">
      <div className="aspect-[1000/208] relative shrink-0 w-full" data-name="Inteligo_Bank_2012 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInteligoBank20121} />
      </div>
    </div>
  );
}

function Logo6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="logo2">
      <Inteligo />
    </div>
  );
}

function ColumnHeader27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <Logo6 />
        </div>
      </div>
    </div>
  );
}

function TableRow24() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader27 />
    </div>
  );
}

function Diviso() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="diviso">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start justify-center pl-[5px] pr-[10px] py-[10px] relative w-full">
          <div className="h-[20px] relative shrink-0 w-[48px]" data-name="1581543654438 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[277.78%] left-[-21.28%] max-w-none top-[-87.61%] w-[138.3%]" src={img15815436544381} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="logo2">
      <Diviso />
    </div>
  );
}

function ColumnHeader28() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <Logo7 />
        </div>
      </div>
    </div>
  );
}

function TableRow25() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader28 />
    </div>
  );
}

function Scociatabank() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start justify-center pl-[5px] pr-[10px] py-[10px] relative shrink-0 w-[90px]" data-name="scociatabank">
      <div className="aspect-[75/19] relative shrink-0 w-full" data-name="Logo_Scotiabank_(Kanada).svg 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-1.11%] max-w-none top-0 w-[102.22%]" src={imgLogoScotiabankKanadaSvg1} />
        </div>
      </div>
    </div>
  );
}

function Logo8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="logo2">
      <Scociatabank />
    </div>
  );
}

function ColumnHeader29() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <Logo8 />
        </div>
      </div>
    </div>
  );
}

function TableRow26() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader29 />
    </div>
  );
}

function Fnd() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="fnd">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start justify-center pl-[5px] pr-[10px] py-[10px] relative w-full">
          <div className="h-[16px] relative shrink-0 w-[49px]" data-name="logo-ligth 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoLigth1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="logo2">
      <Fnd />
    </div>
  );
}

function ColumnHeader30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <Logo9 />
        </div>
      </div>
    </div>
  );
}

function TableRow27() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader30 />
    </div>
  );
}

function Bbva1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="BBVA">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start justify-center pl-[5px] pr-[10px] py-[10px] relative w-full">
          <div className="h-[14px] relative shrink-0 w-[47px]" data-name="BBVA_2019.svg 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBbva2019Svg1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="logo2">
      <Bbva1 />
    </div>
  );
}

function ColumnHeader31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <Logo10 />
        </div>
      </div>
    </div>
  );
}

function TableRow28() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader31 />
    </div>
  );
}

function TableContent2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Content">
      <TableRow20 />
      <TableRow21 />
      <TableRow22 />
      <TableRow23 />
      <TableRow24 />
      <TableRow25 />
      <TableRow26 />
      <TableRow27 />
      {[...Array(2).keys()].map((_, i) => (
        <TableRow28 key={i} />
      ))}
    </div>
  );
}

function ColumnOperacion() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[174px]" data-name="column operacion">
      <TableHeader2 />
      <TableContent2 />
    </div>
  );
}

function ColumnHeader33() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative shrink-0 w-[150px]" data-name="Column Header">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tipo de Operación
      </p>
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Table Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader33 />
    </div>
  );
}

function ColumnHeader34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Emisión RV
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow30() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader34 />
    </div>
  );
}

function ColumnHeader35() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Colocación RF
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow31() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader35 />
    </div>
  );
}

function ColumnHeader36() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            OPA
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow32() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader36 />
    </div>
  );
}

function ColumnHeader37() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            OPI
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow33() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader37 />
    </div>
  );
}

function ColumnHeader38() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            OPV
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow34() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader38 />
    </div>
  );
}

function ColumnHeader39() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            OPC
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow35() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader39 />
    </div>
  );
}

function ColumnHeader40() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Canje
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow36() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader40 />
    </div>
  );
}

function ColumnHeader41() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Enajenación esta..
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow37() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader41 />
    </div>
  );
}

function ColumnHeader42() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Reestructuración ..
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow38() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader42 />
    </div>
  );
}

function ColumnHeader43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Financiamiento c ..
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow39() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader43 />
    </div>
  );
}

function TableContent3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Content">
      <TableRow30 />
      <TableRow31 />
      <TableRow32 />
      <TableRow33 />
      <TableRow34 />
      <TableRow35 />
      <TableRow36 />
      <TableRow37 />
      <TableRow38 />
      <TableRow39 />
    </div>
  );
}

function ColumnTipoOperacion() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]" data-name="column tipo operacion">
      <TableHeader3 />
      <TableContent3 />
    </div>
  );
}

function ColumnHeader44() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative shrink-0 w-[150px]" data-name="Column Header">
      <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nemotécnico
      </p>
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Table Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader44 />
    </div>
  );
}

function ColumnHeader45() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            BBVAEJEMPLO
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow40() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader45 />
    </div>
  );
}

function ColumnHeader46() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            CREDIECXAMPLE
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow41() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader46 />
    </div>
  );
}

function ColumnHeader47() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            KALLPEXEMPLO
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow42() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader47 />
    </div>
  );
}

function ColumnHeader48() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            BGTBEISPIEL
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow43() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader48 />
    </div>
  );
}

function ColumnHeader49() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            INTELEXEMPLE
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow44() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader49 />
    </div>
  );
}

function ColumnHeader50() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            DIVISOLIZI
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow45() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader50 />
    </div>
  );
}

function ColumnHeader51() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            SCOTIAREI
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow46() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader51 />
    </div>
  );
}

function ColumnHeader52() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            NEXUSAMPLE
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow47() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader52 />
    </div>
  );
}

function ColumnHeader53() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            VORTEXMODUL
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow48() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader53 />
    </div>
  );
}

function ColumnHeader54() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            PRECISIONEXEM
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow49() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader54 />
    </div>
  );
}

function TableContent4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Content">
      <TableRow40 />
      <TableRow41 />
      <TableRow42 />
      <TableRow43 />
      <TableRow44 />
      <TableRow45 />
      <TableRow46 />
      <TableRow47 />
      <TableRow48 />
      <TableRow49 />
    </div>
  );
}

function ColumnNemotecnico() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[174px]" data-name="column Nemotécnico">
      <TableHeader4 />
      <TableContent4 />
    </div>
  );
}

function ColumnHeader55() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Fecha de Inicio ...
          </p>
        </div>
      </div>
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Table Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader55 />
    </div>
  );
}

function ColumnHeader56() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            15 de marzo 2024
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow50() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader56 />
    </div>
  );
}

function TableContent5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Content">
      {[...Array(10).keys()].map((_, i) => (
        <TableRow50 key={i} />
      ))}
    </div>
  );
}

function ColumnCantidad() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[174px]" data-name="column Cantidad">
      <TableHeader5 />
      <TableContent5 />
    </div>
  );
}

function ColumnHeader66() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Cantidad de la Oferta
          </p>
        </div>
      </div>
    </div>
  );
}

function TableHeader6() {
  return (
    <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-[289px]" data-name="Table Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader66 />
    </div>
  );
}

function ColumnHeader67() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            1.000.000
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow60() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader67 />
    </div>
  );
}

function ColumnHeader68() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            234.870.000
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow61() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader68 />
    </div>
  );
}

function ColumnHeader69() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            500.000
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow62() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader69 />
    </div>
  );
}

function ColumnHeader70() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            300.000
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow63() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader70 />
    </div>
  );
}

function ColumnHeader71() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            70.000
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow64() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader71 />
    </div>
  );
}

function ColumnHeader72() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            2.500.000
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow65() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader72 />
    </div>
  );
}

function ColumnHeader73() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            348.454.870
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow66() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader73 />
    </div>
  );
}

function ColumnHeader74() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            10.000.000
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow67() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader74 />
    </div>
  );
}

function ColumnHeader75() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            1.250.000
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow68() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader75 />
    </div>
  );
}

function ColumnHeader76() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Column Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            450.000
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow69() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
      <ColumnHeader76 />
    </div>
  );
}

function TableContent6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[289px]" data-name="Table Content">
      <TableRow60 />
      <TableRow61 />
      <TableRow62 />
      <TableRow63 />
      <TableRow64 />
      <TableRow65 />
      <TableRow66 />
      <TableRow67 />
      <TableRow68 />
      <TableRow69 />
    </div>
  );
}

function ColumnCantidad1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[260px]" data-name="column Cantidad">
      <TableHeader6 />
      <TableContent6 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip top-0" data-name="Table">
      <ColumnDetalles />
      <ColumnEstado />
      <ColumnOperacion />
      <ColumnTipoOperacion />
      <ColumnNemotecnico />
      <ColumnCantidad />
      <ColumnCantidad1 />
    </div>
  );
}

function TableContainer() {
  return (
    <div className="h-[436px] relative shrink-0 w-full" data-name="Table container">
      <div className="h-[436px] overflow-x-auto overflow-y-clip relative w-full">
        <Table />
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Scroll() {
  return (
    <div className="relative shrink-0 w-full" data-name="scroll">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[8px] relative w-full">
          <div className="bg-[#d9d9d9] h-[5px] rounded-[100px] shrink-0 w-[900px]" />
        </div>
      </div>
    </div>
  );
}

function ArrowDropDownFilled1() {
  return (
    <div className="[grid-area:1_/_1] ml-[14px] mt-0 relative size-[24px]" data-name="ArrowDropDownFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ArrowDropDownFilled">
          <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Page() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Page">
      <p className="[grid-area:1_/_1] font-['Roboto:Regular',_sans-serif] font-normal leading-[1.66] ml-0 mt-[3px] relative text-[12px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        10
      </p>
      <ArrowDropDownFilled1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.66] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] text-nowrap tracking-[0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Filas por página:
      </p>
      <Page />
    </div>
  );
}

function ChevronLeftFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChevronLeftFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ChevronLeftFilled">
          <path d={svgPaths.p73b2780} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ChevronLeftFilled />
    </div>
  );
}

function IconButton() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon12 />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="absolute bg-[#ff4201] left-0 overflow-clip rounded-[100px] size-[32px] top-0" data-name="<ButtonBase>">
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal inset-[18.75%_35.94%_18.75%_39.06%] leading-[1.43] text-[#f7f7f7] text-[14px] text-center text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1
      </p>
    </div>
  );
}

function PaginationItem() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="<PaginationItem>">
      <ButtonBase />
    </div>
  );
}

function ButtonBase1() {
  return (
    <div className="absolute left-0 overflow-clip rounded-[100px] size-[32px] top-0" data-name="<ButtonBase>">
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal inset-[18.75%_35.94%_18.75%_39.06%] leading-[1.43] text-[14px] text-[rgba(0,0,0,0.87)] text-center text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2
      </p>
    </div>
  );
}

function PaginationItem1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="<PaginationItem>">
      <ButtonBase1 />
    </div>
  );
}

function ButtonBase2() {
  return (
    <div className="absolute left-0 overflow-clip rounded-[100px] size-[32px] top-0" data-name="<ButtonBase>">
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal inset-[18.75%_35.94%_18.75%_39.06%] leading-[1.43] text-[14px] text-[rgba(0,0,0,0.87)] text-center text-nowrap tracking-[0.17px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        3
      </p>
    </div>
  );
}

function PaginationItem2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="<PaginationItem>">
      <ButtonBase2 />
    </div>
  );
}

function ChevronRightFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChevronRightFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ChevronRightFilled">
          <path d={svgPaths.p2ded1f00} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ChevronRightFilled />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon13 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Navigation">
      <IconButton />
      <PaginationItem />
      <PaginationItem1 />
      <PaginationItem2 />
      <IconButton1 />
    </div>
  );
}

function TableFooter() {
  return (
    <div className="box-border content-stretch flex gap-[26px] items-center justify-end px-0 py-[2px] relative shrink-0 w-[1149px]" data-name="<TableFooter>">
      <Container15 />
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[1.66] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1-5 de 13
      </p>
      <Navigation />
    </div>
  );
}

function TableFooter1() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="TableFooter">
      <TableFooter />
    </div>
  );
}

function TableComponent() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-full" data-name="Table Component">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Head13 />
      <TableContainer />
      <Scroll />
      <TableFooter1 />
    </div>
  );
}

function TableComponent1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Table Component">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <TableComponent />
    </div>
  );
}

function CardPrimary() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="Card Primary">
      <Filtrer />
      <TableComponent1 />
    </div>
  );
}

function TableComponent2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-full z-[1]" data-name="Table Component">
      <CardPrimary />
    </div>
  );
}

function CardBasicsSmall() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0 w-full z-[1]" data-name="<Card> / Basics / Small">
      <Migas />
      <FilterActions />
      <Card2 />
      <TableComponent2 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] isolate items-start pb-[16px] pt-0 px-[16px] relative shrink-0 w-[1182px]" data-name="Main Content">
      <CardBasicsSmall />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Container">
      <div className="flex flex-row items-end self-stretch">
        <CustomSidenav1 />
      </div>
      <MainContent />
    </div>
  );
}

export default function GestionDeAceptacionesYCesiones() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Gestión de Aceptaciones y Cesiones">
      <Header1 />
      <Container16 />
    </div>
  );
}