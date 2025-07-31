import Layout from "@/components/layouts/Layout";
import ImageGenerator from "@/components/ai/ImageGenerator";

const GenerateTextAiPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-gray-50">
        <ImageGenerator />
      </div>
    </Layout>
  );
};

export default GenerateTextAiPage;