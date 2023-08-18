import { useEffect, useRef } from "react";
const UploadWidget = () => {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(() => {
        cloudinaryRef.current = window.window.cloudinary;
        widgetRefRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "dpzabibqg",
            uploadPreset: "Portfolio"
        }, function(error, result) {
            console.log(result);
        });
    }, [])
}

export default UploadWidget;