import { useCallback } from "react";
import { getSiteFormInfo } from "../../../../api/formRoom";
import { useDropzone } from "react-dropzone";

export default function FormRoomCreate({
  setTab,
}: {
  setTab: (v: "view" | "create") => void;
}) {
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onload = () => {
        const binary = reader.result;
        console.log("binary : ", binary);
      };
      reader.readAsArrayBuffer(file);
    });

    console.log("acceptedFiles", acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{ border: "1px red solid", width: 200, height: 50 }}
      >
        <input {...getInputProps()} />

        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>

      <br />
      <button onClick={() => setTab("view")}>back</button>
    </div>
  );
}
