import { Upload } from "antd"

const UploadFiles = () => {
    return (
        <div>
            <Upload.Dragger
                multiple
                action={"https://final-server-seopage1.onrender.com/upload"}
                listType="picture"

            >
                Click or Drag file...
            </Upload.Dragger>

        </div>
    );
};

export default UploadFiles;