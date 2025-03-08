export const handleFiles = (event, setFiles) => {
  const newFiles = Array.from(event.target.files);
  setFiles((prevFiles) => [...prevFiles, ...newFiles]);
};

export const handleDrop = (event, setFiles) => {
  event.preventDefault();
  const newFiles = Array.from(event.dataTransfer.files);
  setFiles((prevFiles) => [...prevFiles, ...newFiles]);
};
