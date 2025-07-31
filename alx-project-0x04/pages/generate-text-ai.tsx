import Layout from "@/components/layouts/Layout";
import TextGenerator from "@/components/ai/TextGenerator";

const GenerateTextAiPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-gray-50">
        <TextGenerator />
      </div>
    </Layout>
  );
};

export default GenerateTextAiPage;