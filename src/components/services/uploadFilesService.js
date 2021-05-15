import http from "../http-common";

class UploadFilesService {
    upload(user, file, onUploadProgress) {
        let formData = new FormData();


        formData.append("file", file);

        return http.post("/users/save", {
            user,
            formData,
        },{
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }

    getFiles() {
        return http.get("/users/get-image");
    }
}

export default new UploadFilesService();