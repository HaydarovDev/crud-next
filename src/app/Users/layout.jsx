export const generateMetadata = ({ params }) => {
  return {
    title: `Blogs ${params?.id}`,
    description: "List of blogs",
  };
};

const layout = ({ children }) => {
  return <>{children}</>;
};

export default layout;
