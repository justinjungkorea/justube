import { videos } from "../db"
export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos });
}

export const search = (req, res) => {
    const { 
        query: { term: searchingBy } 
    } = req;
    res.render("Search", { pageTitle: "Search", searchingBy , videos}); 
}

export const upload = (req, res) => {
    res.render("Upload", { pageTitle: "Upload" }); 
}
export const videoDetail = (req, res) => {
    res.render("Video Detail", { pageTitle: "Video Detail" });
}
export const editVideo = (req, res) => {
    res.render("Edit Video", { pageTitle: "Edit Video" }); 
}
export const deleteVideo = (req, res) => {
    res.render("Delete Video", { pageTitle: "Delete Video" }); 
}