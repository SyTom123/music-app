import { Response, Request } from "express";
import Topic from "../../models/topic.model";
import Song from "../../models/song.model";
import Singer from "../../models/singer.model";

//[GET]/songs/list/:slugTopic
export const list = async (req: Request, res: Response) => {
    const slug = req.params.slugTopic;
    
    const topic = await Topic.findOne({
        slug: slug,
        deleted: false,
        status: "active"
    });

    const songs = await Song.find({
        topicId: topic._id,
        status: "active",
        deleted: false
    }).select("avatar title slug singerId like");

    for(const song of songs) {
        const infoSinger = await Singer.findOne({
            _id: song.singerId,
            status: "active",
            deleted: false
        })
        song["infoSinger"] = infoSinger;
    }

    res.render("client/pages/songs/list", {
        pageTitle: topic.title,
        songs: songs
    });
}

// [GET] /songs/detail/:slugSong
export const detail = async (req: Request, res: Response) => {
    const slugSong: string = req.params.slugSong;
    
    const song = await Song.findOne({
        slug: slugSong,
        status: "active",
        deleted: false
    });
    const singer = await Singer.findOne({
        _id: song.singerId,
        deleted: false
    }).select("fullName");

    const topic = await Topic.findOne({
        _id: song.topicId,
        deleted: false
    }).select("title");


    res.render("client/pages/songs/detail", {
        pageTitle: "Chi tiết bài hát",
        song: song,
        singer: singer,
        topic: topic
    });
  };