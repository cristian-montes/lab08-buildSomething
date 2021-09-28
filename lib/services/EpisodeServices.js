const Episode = require('../models/EpisodeMo');
const { fetchEpisodeData } = require('../utils/fetchTheData');

class EpisodeService {

  static async getAllEpisodes(){
    const info = await fetchEpisodeData();
    return info.results.map((episodeInfo) => {
      return{
        id: episodeInfo.id,
        name: episodeInfo.name
      };
    });
  }

  //POSTS A NEW EPISODE IN THE SQL TABLE
  static async postEpisode(id){
    const episodes = await this.getAllEpisodes();
    const numberID = Number(id);
    const desiredEpisode = [];

    for(const epi of episodes){
      if(epi.id === numberID){
        desiredEpisode.push(epi.name);
      }
    }
    const episode = await Episode.insert({ episode_name: desiredEpisode[0] });
    return episode;
  }
    
   
  




  


}

module.exports = EpisodeService;
