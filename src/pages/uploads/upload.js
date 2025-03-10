export const handleFiles = (event, setFiles) => {
  const selectedFiles = Array.from(event.target.files); // Ensure array
  setFiles((prevFiles) => [...prevFiles, ...selectedFiles]); // Append to existing list
};

export const handleDrop = (event, setFiles) => {
  event.preventDefault();
  const droppedFiles = Array.from(event.dataTransfer.files); // Ensure array
  setFiles((prevFiles) => [...prevFiles, ...droppedFiles]); // Append
};

export const uploadFiles = async (files) => {
  console.log("Files received:", files); // Debugging

  if (!Array.isArray(files) || files.length === 0) {
    alert("No valid files selected.");
    return;
  }

  const formData = new FormData();
  files.forEach((file) => formData.append("file", file)); // Ensure looping works

  try {
    const response = await fetch("http://localhost:5000/summarize", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Upload failed");

    const data = await response.json();
    console.log("Upload successful:", data);
  } catch (error) {
    console.error("Upload error:", error);
  }
};
