import { Upload } from "antd"

const UploadFiles = () => {
    return (
        <div>
            <Upload.Dragger
                multiple
                action={"www.google.com"}
                listType="picture"

            >
                Click or Drag file...
            </Upload.Dragger>

        </div>
    );
};

export default UploadFiles;