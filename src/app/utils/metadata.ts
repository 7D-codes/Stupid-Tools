import { tools } from "../../lib";

export const getToolMetadata = (toolUrl: string) => {
  const tool = tools.find((tool) => tool.url === toolUrl);
  if (!tool) {
    console.warn(
      `Tool with URL "${toolUrl}" not found. Returning default metadata.`
    );
    return {
      title: "UselessTools",
      description: "Explore our fun and quirky tools.",
    };
  }
  return tool.metadata;
};
