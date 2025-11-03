import svgPaths from "./svg-77d205rv9j";
import imgAHealthcareProfessionalWithShortBlackHairWearingAWhiteLabCoatAndAStethoscopeAroundTheirNeckStandingInAModernClinic from "figma:asset/b815f65b5d56c810fb40032b9bfe477ef3b5ceef.png";
import imgAHealthcareProfessionalSmilingWhileStandingInAModernClinicWithMedicalEquipmentInTheBackground from "figma:asset/0fb5252f07b9f973a48a46674424f656b6a1ff99.png";
import imgASmilingWomanWithShoulderLengthBrownHairWearingAWhiteLabCoatAndAStethoscopeAroundHerNeckStandingInABrightModernOffice from "figma:asset/8aac3cbc5c57a8e0fb678de87c391d5d96f81429.png";
import imgAHealthcareProfessionalWithShortDarkHairWearingAWhiteLabCoatAndAStethoscopeAroundTheirNeckSmilingConfidentlyInAWellLitOffice from "figma:asset/4c2dcf1e38238f8310cac1524f138cacf241d996.png";
import imgAHealthcareProfessionalWithShortBlackHairWearingAWhiteLabCoatAndAStethoscopeAroundTheirNeckSmilingConfidentlyInAWellLitOffice from "figma:asset/20cba18e4a1668900b5571e6e979a5eb48a6ff96.png";

function Menu() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="menu">
          <path d="M3 12H21M3 6H21M3 18H21" id="Icon" stroke="var(--stroke-0, #221B28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0" data-name="logo">
      <p className="font-['Domine:Bold',_sans-serif] font-bold leading-none lowercase relative shrink-0 text-[#592784] text-[28px] text-nowrap tracking-[-1.12px] whitespace-pre">HealthPro</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Menu />
      <Logo />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p20679400} id="Icon" stroke="var(--stroke-0, #221B28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function AppGrid() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="app-grid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="app-grid">
          <g id="Icon">
            <path d="M10 3H3V10H10V3Z" stroke="var(--stroke-0, #221B28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M21 3H14V10H21V3Z" stroke="var(--stroke-0, #221B28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M21 14H14V21H21V14Z" stroke="var(--stroke-0, #221B28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M10 14H3V21H10V14Z" stroke="var(--stroke-0, #221B28)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AHealthcareProfessionalWithShortBlackHairWearingAWhiteLabCoatAndAStethoscopeAroundTheirNeckStandingInAModernClinic() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[22px]" data-name="A healthcare professional with short black hair wearing a white lab coat and a stethoscope around their neck standing in a modern clinic.">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[22px] size-full" src={imgAHealthcareProfessionalWithShortBlackHairWearingAWhiteLabCoatAndAStethoscopeAroundTheirNeckStandingInAModernClinic} />
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(93,73,110,0)] border-solid inset-0 rounded-[22px]" />
    </div>
  );
}

function Profile() {
  return (
    <div className="overflow-clip relative rounded-[22px] shrink-0 size-[40px]" data-name="profile">
      <AHealthcareProfessionalWithShortBlackHairWearingAWhiteLabCoatAndAStethoscopeAroundTheirNeckStandingInAModernClinic />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-[446.333px]" data-name="Header">
      <Search />
      <AppGrid />
      <Profile />
    </div>
  );
}

function WebAppNavBar() {
  return (
    <div className="bg-[#fdfaff] box-border content-stretch flex items-center justify-between px-0 py-[12px] relative shrink-0 w-full z-[3]" data-name="Web App Nav Bar">
      <Container />
      <Header />
      <div className="absolute bottom-0 h-0 left-[-96px] right-[-96px]" data-name="divider">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="divider"></g>
        </svg>
      </div>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="bg-[#fdfaff] relative rounded-[18px] shrink-0 w-full" data-name="menu item">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#221b28] text-[15px] w-[62px]">Videos</p>
        </div>
      </div>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="bg-[#fdfaff] relative rounded-[18px] shrink-0 w-full" data-name="menu item">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#221b28] text-[15px] text-nowrap whitespace-pre">Lessons</p>
        </div>
      </div>
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="bg-[#fdfaff] relative rounded-[18px] shrink-0 w-full" data-name="menu item">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#221b28] text-[15px] text-nowrap whitespace-pre">Forms</p>
        </div>
      </div>
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="bg-[#fdfaff] relative rounded-[18px] shrink-0 w-full" data-name="menu item?">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#221b28] text-[15px] text-nowrap whitespace-pre">Resources</p>
        </div>
      </div>
    </div>
  );
}

function MenuItem4() {
  return (
    <div className="bg-[#fdfaff] relative rounded-[18px] shrink-0 w-full" data-name="menu item?">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#221b28] text-[15px] text-nowrap whitespace-pre">Reading Materials</p>
        </div>
      </div>
    </div>
  );
}

function SidePanelMenu() {
  return (
    <div className="bg-[#fdfaff] box-border content-stretch flex flex-col h-[760px] items-start overflow-clip px-0 py-[24px] relative shrink-0 w-full z-[1]" data-name="Side Panel Menu">
      <MenuItem />
      <MenuItem1 />
      <MenuItem2 />
      <MenuItem3 />
      <MenuItem4 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="content-stretch flex flex-col h-[760px] isolate items-start overflow-clip relative shrink-0 w-[400px] z-[2]" data-name="Sidebar">
      <SidePanelMenu />
    </div>
  );
}

function CaretDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="caret-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="caret-down">
          <path d={svgPaths.p9005000} fill="var(--fill-0, #221B28)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title Container">
      <p className="font-['Roboto_Serif:Bold',_sans-serif] font-bold leading-[40px] relative shrink-0 text-[#221b28] text-[34px] text-nowrap tracking-[-0.68px] whitespace-pre" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
        Functional Medicine Program
      </p>
      <CaretDown />
    </div>
  );
}

function ProjectStatus() {
  return (
    <div className="bg-[rgba(85,37,126,0.09)] box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[18px] shrink-0" data-name="projectStatus">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="relative shrink-0 size-[6px]" data-name="Status Dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #46087C)" id="Status Dot" r="3" />
        </svg>
      </div>
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#221b28] text-[15px] text-center text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function TitleAndStatusContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Title and Status Container">
      <TitleContainer />
      <ProjectStatus />
    </div>
  );
}

function ButtonFilledStandard() {
  return (
    <div className="bg-[#5e09a9] box-border content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[18px] shrink-0" data-name="buttonFilledStandard">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#fdfbfe] text-[15px] text-nowrap whitespace-pre">Share</p>
    </div>
  );
}

function DotsHorizontal() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="dots-horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dots-horizontal">
          <path clipRule="evenodd" d={svgPaths.p3d5ea200} fill="var(--fill-0, #221B28)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Div() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="div">
      <DotsHorizontal />
    </div>
  );
}

function IconButtonOutlinedStandard() {
  return (
    <div className="bg-[#fdfaff] box-border content-stretch flex items-center justify-center p-[8px] relative rounded-[18px] shrink-0" data-name="iconButtonOutlinedStandard">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(93,73,110,0.2)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Div />
    </div>
  );
}

function ActionsContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Actions Container">
      <ButtonFilledStandard />
      <IconButtonOutlinedStandard />
    </div>
  );
}

function HeaderFrame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header Frame">
      <TitleAndStatusContainer />
      <ActionsContainer />
    </div>
  );
}

function AHealthcareProfessionalSmilingWhileStandingInAModernClinicWithMedicalEquipmentInTheBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[20px]" data-name="A healthcare professional smiling while standing in a modern clinic with medical equipment in the background.">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[20px] size-full" src={imgAHealthcareProfessionalSmilingWhileStandingInAModernClinicWithMedicalEquipmentInTheBackground} />
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(93,73,110,0)] border-solid inset-0 rounded-[20px]" />
    </div>
  );
}

function Profile1() {
  return (
    <div className="mr-[-6px] relative rounded-[20px] shrink-0 size-[32px] z-[4]" data-name="profile">
      <div className="overflow-clip relative rounded-[inherit] size-[32px]">
        <AHealthcareProfessionalSmilingWhileStandingInAModernClinicWithMedicalEquipmentInTheBackground />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#fdfbfe] border-solid inset-[-2px] pointer-events-none rounded-[22px]" />
    </div>
  );
}

function ASmilingWomanWithShoulderLengthBrownHairWearingAWhiteLabCoatAndAStethoscopeAroundHerNeckStandingInABrightModernOffice() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[20px]" data-name="A smiling woman with shoulder-length brown hair wearing a white lab coat and a stethoscope around her neck standing in a bright, modern office.">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[20px] size-full" src={imgASmilingWomanWithShoulderLengthBrownHairWearingAWhiteLabCoatAndAStethoscopeAroundHerNeckStandingInABrightModernOffice} />
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(93,73,110,0)] border-solid inset-0 rounded-[20px]" />
    </div>
  );
}

function Profile2() {
  return (
    <div className="mr-[-6px] relative rounded-[20px] shrink-0 size-[32px] z-[3]" data-name="profile">
      <div className="overflow-clip relative rounded-[inherit] size-[32px]">
        <ASmilingWomanWithShoulderLengthBrownHairWearingAWhiteLabCoatAndAStethoscopeAroundHerNeckStandingInABrightModernOffice />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#fdfbfe] border-solid inset-[-2px] pointer-events-none rounded-[22px]" />
    </div>
  );
}

function AHealthcareProfessionalWithShortDarkHairWearingAWhiteLabCoatAndAStethoscopeAroundTheirNeckSmilingConfidentlyInAWellLitOffice() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[20px]" data-name="A healthcare professional with short dark hair wearing a white lab coat and a stethoscope around their neck, smiling confidently in a well-lit office.">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[20px] size-full" src={imgAHealthcareProfessionalWithShortDarkHairWearingAWhiteLabCoatAndAStethoscopeAroundTheirNeckSmilingConfidentlyInAWellLitOffice} />
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(93,73,110,0)] border-solid inset-0 rounded-[20px]" />
    </div>
  );
}

function Profile3() {
  return (
    <div className="mr-[-6px] relative rounded-[20px] shrink-0 size-[32px] z-[2]" data-name="profile">
      <div className="overflow-clip relative rounded-[inherit] size-[32px]">
        <AHealthcareProfessionalWithShortDarkHairWearingAWhiteLabCoatAndAStethoscopeAroundTheirNeckSmilingConfidentlyInAWellLitOffice />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#fdfbfe] border-solid inset-[-2px] pointer-events-none rounded-[22px]" />
    </div>
  );
}

function AHealthcareProfessionalWithShortBlackHairWearingAWhiteLabCoatAndAStethoscopeAroundTheirNeckSmilingConfidentlyInAWellLitOffice() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[20px]" data-name="A healthcare professional with short black hair wearing a white lab coat and a stethoscope around their neck, smiling confidently in a well-lit office.">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[20px] size-full" src={imgAHealthcareProfessionalWithShortBlackHairWearingAWhiteLabCoatAndAStethoscopeAroundTheirNeckSmilingConfidentlyInAWellLitOffice} />
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(93,73,110,0)] border-solid inset-0 rounded-[20px]" />
    </div>
  );
}

function Profile4() {
  return (
    <div className="mr-[-6px] relative rounded-[20px] shrink-0 size-[32px] z-[1]" data-name="profile">
      <div className="overflow-clip relative rounded-[inherit] size-[32px]">
        <AHealthcareProfessionalWithShortBlackHairWearingAWhiteLabCoatAndAStethoscopeAroundTheirNeckSmilingConfidentlyInAWellLitOffice />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#fdfbfe] border-solid inset-[-2px] pointer-events-none rounded-[22px]" />
    </div>
  );
}

function ProfilePictures() {
  return (
    <div className="box-border content-stretch flex isolate items-start pl-0 pr-[6px] py-0 relative shrink-0" data-name="Profile pictures">
      <Profile1 />
      <Profile2 />
      <Profile3 />
      <Profile4 />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex font-['Public_Sans:Regular',_sans-serif] font-normal gap-[4px] items-center leading-[20px] relative shrink-0 text-[15px] text-[rgba(34,20,46,0.62)] text-nowrap tracking-[-0.075px] whitespace-pre" data-name="Text container">
      <p className="relative shrink-0">Dr. Amina, Dr. Bernardo</p>
      <p className="relative shrink-0">+12 others</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <ProfilePictures />
      <TextContainer />
    </div>
  );
}

function TabItem1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[14px] shrink-0" data-name="tab item 1?">
      <div aria-hidden="true" className="absolute border-[#853dc5] border-[0px_0px_1.5px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#592784] text-[15px] text-nowrap whitespace-pre">Week 1</p>
    </div>
  );
}

function TabItem2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative shrink-0" data-name="tab item 2?">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-[rgba(34,20,46,0.62)] text-nowrap whitespace-pre">Week 2</p>
    </div>
  );
}

function TabItem3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative shrink-0" data-name="tabItem3?">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-[rgba(34,20,46,0.62)] text-nowrap whitespace-pre">Week 3</p>
    </div>
  );
}

function TabItem4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative shrink-0" data-name="tabItem4?">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-[rgba(34,20,46,0.62)] text-nowrap whitespace-pre">Week 4</p>
    </div>
  );
}

function TabItem5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative shrink-0" data-name="tabItem5?">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-[rgba(34,20,46,0.62)] text-nowrap whitespace-pre">Week 5</p>
    </div>
  );
}

function DashboardTabs() {
  return (
    <div className="content-stretch flex items-start relative rounded-[14px] shrink-0 w-full" data-name="dashboard tabs">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.5px] border-[rgba(93,73,110,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <TabItem1 />
      <TabItem2 />
      <TabItem3 />
      <TabItem4 />
      <TabItem5 />
    </div>
  );
}

function DashboardTitle() {
  return (
    <div className="bg-[#fdfaff] box-border content-stretch flex flex-col gap-[24px] items-start overflow-clip px-0 py-[24px] relative shrink-0 w-full z-[3]" data-name="dashboard title">
      <HeaderFrame />
      <Container1 />
      <DashboardTabs />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header container">
      <p className="font-['Roboto_Serif:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#221b28] text-[28px] text-center tracking-[-0.56px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
        Week 1: Introduction to Functional Medicine
      </p>
    </div>
  );
}

function AnswerOption1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[18px] shrink-0" data-name="answerOption1">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(93,73,110,0.2)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#221b28] text-[15px] text-nowrap whitespace-pre">Add Lecture</p>
    </div>
  );
}

function AnswerOption2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[18px] shrink-0" data-name="answerOption2">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(93,73,110,0.2)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#221b28] text-[15px] text-nowrap whitespace-pre">Add Reading Material</p>
    </div>
  );
}

function AnswerOption3() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[18px] shrink-0" data-name="answerOption3">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(93,73,110,0.2)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#221b28] text-[15px] text-nowrap whitespace-pre">Add Quiz</p>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[12px] items-center justify-center px-0 py-[12px] relative shrink-0 w-[600px]" data-name="Button group">
      <AnswerOption1 />
      <AnswerOption2 />
      <AnswerOption3 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5e09a9] relative rounded-[18px] shrink-0 w-full" data-name="button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#fdfbfe] text-[15px] text-nowrap whitespace-pre">Save Changes</p>
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[400px]" data-name="Main container">
      <HeaderContainer />
      <ButtonGroup />
      <Button />
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#592784] text-[15px] text-nowrap whitespace-pre">Skip</p>
    </div>
  );
}

function OnboardingMultipleChoice() {
  return (
    <div className="bg-[#fdfaff] box-border content-stretch flex flex-col gap-[48px] items-center min-h-[700px] pb-0 pt-[200px] px-0 relative shrink-0 w-full z-[2]" data-name="Onboarding Multiple Choice">
      <MainContainer />
    </div>
  );
}

function HeaderContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header container">
      <p className="font-['Roboto_Serif:Bold',_sans-serif] font-bold leading-[32px] relative shrink-0 text-[#221b28] text-[28px] text-center tracking-[-0.56px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
        Week 2: Nutrition and Lifestyle
      </p>
    </div>
  );
}

function AnswerOption4() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[18px] shrink-0" data-name="answerOption1">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(93,73,110,0.2)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#221b28] text-[15px] text-nowrap whitespace-pre">Add Lecture</p>
    </div>
  );
}

function AnswerOption5() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[18px] shrink-0" data-name="answerOption2">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(93,73,110,0.2)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#221b28] text-[15px] text-nowrap whitespace-pre">Add Reading Material</p>
    </div>
  );
}

function AnswerOption6() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[18px] shrink-0" data-name="answerOption3">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(93,73,110,0.2)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#221b28] text-[15px] text-nowrap whitespace-pre">Add Quiz</p>
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[12px] items-center justify-center px-0 py-[12px] relative shrink-0 w-[600px]" data-name="Button group">
      <AnswerOption4 />
      <AnswerOption5 />
      <AnswerOption6 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#5e09a9] relative rounded-[18px] shrink-0 w-full" data-name="button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#fdfbfe] text-[15px] text-nowrap whitespace-pre">Save Changes</p>
        </div>
      </div>
    </div>
  );
}

function MainContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[400px]" data-name="Main container">
      <HeaderContainer1 />
      <ButtonGroup1 />
      <Button1 />
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#592784] text-[15px] text-nowrap whitespace-pre">Skip</p>
    </div>
  );
}

function OnboardingMultipleChoice1() {
  return (
    <div className="bg-[#fdfaff] box-border content-stretch flex flex-col gap-[48px] items-center min-h-[700px] pb-0 pt-[200px] px-0 relative shrink-0 w-full z-[1]" data-name="Onboarding Multiple Choice">
      <MainContainer1 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px overflow-clip relative shrink-0 z-[1]" data-name="Main Content">
      <DashboardTitle />
      <OnboardingMultipleChoice />
      <OnboardingMultipleChoice1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[48px] isolate items-start overflow-clip relative shrink-0 w-full z-[2]" data-name="Container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

function BasicFooter() {
  return <div className="bg-[#fdfaff] h-[48px] shrink-0 w-full z-[1]" data-name="Basic Footer" />;
}

export default function CurriculumBuilderForAFunctionalMedicineProgramLeftSideHasAMenuForComponentsRightSideHasBlocksForEachWeekToDragComponentsInto() {
  return (
    <div className="bg-[#fdfaff] relative size-full" data-name="Curriculum builder for a functional medicine program. Left side has a menu for components. Right side has blocks for each week to drag components into">
      <div className="min-h-inherit size-full">
        <div className="box-border content-stretch flex flex-col isolate items-start min-h-inherit px-[48px] py-0 relative size-full">
          <WebAppNavBar />
          <Container2 />
          <BasicFooter />
        </div>
      </div>
    </div>
  );
}