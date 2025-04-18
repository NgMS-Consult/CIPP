import { Layout as DashboardLayout } from "/src/layouts/index.js";
import { CippWizardConfirmation } from "/src/components/CippWizard/CippWizardConfirmation";
import CippWizardPage from "/src/components/CippWizard/CippWizardPage.jsx";
import { CippTenantStep } from "../../../../components/CippWizard/CippTenantStep";
import { CippScriptForm } from "../../../../components/CippWizard/CippScriptForm";

const Page = () => {
  const steps = [
    {
      title: "Step 1",
      description: "Tenant Selection",
      component: CippTenantStep,
      componentProps: { type: "multiple" , valueField: "customerId"},
    },
    {
      title: "Step 2",
      description: "Script Configuration",
      component: CippScriptForm,
    },
    {
      title: "Step 3",
      description: "Confirmation",
      component: CippWizardConfirmation,
    },
  ];

  return (
    <>
      <CippWizardPage steps={steps} wizardTitle="Deploy Script" postUrl={"/api/AddScript"} />
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
