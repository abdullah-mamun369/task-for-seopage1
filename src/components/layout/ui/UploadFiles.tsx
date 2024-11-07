import { Upload } from "antd"

const UploadFiles = () => {
    return (
        <div>
            <Upload.Dragger
                multiple
                action={"http://localhost:4000/upload"}
                listType="picture"

            >
                Click or Drag file...
            </Upload.Dragger>

        </div>
    );
};

export default UploadFiles;