import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";


@Module({
  imports:[
    TrackModule,
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.mvkzi.mongodb.net/music?retryWrites=true&w=majority')
  ]
})
export class AppModule{}
