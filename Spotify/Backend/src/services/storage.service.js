import ImageKit from '@imagekit/nodejs';
import { config } from '../config/config.js';


const ImageKitClient=new ImageKit({
    privateKey:config.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(file){
const result = await ImageKitClient.files.upload({
    file,
    fileName:"music_"+Date.now(),
    folder:"yt-complete-backend/music"
})

return result
}

export default uploadFile