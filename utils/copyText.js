import { useWebsiteStore } from "../stores/websiteStore";
const websiteStore = useWebsiteStore();

export const copyText = ({ type, copiedItem }) => {
  navigator.clipboard.writeText(copiedItem);

  websiteStore.addToast({
    type: "success",
    message: `Copied ${type} to clipboard`,
  });
};
