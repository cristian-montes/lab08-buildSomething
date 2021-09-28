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

  //GETS ALL EPISODES FROM TABLE
  static async getStoredEpisodes(){
    const allTheEpisodes = await Episode.allEpisodes();
    return allTheEpisodes;
  }
    
  // GET EPISODE BY ID FROM TABLE 
  static async getStoredEpisodeById(id){
    const episode =  await Episode.getEpisodeById(id);
    return episode;
  }

  //UPDATE EPISODE BY ID
  static async updateStoredEpisode(id, name){
    const updatedEpisode = await Episode.updateEpisodeById(id, name);
    return updatedEpisode;
  }

  //DELETE EPISODE BY NAME
  static async deleteStoredEpisode(id){
    const deletedEposode = await Episode.deleteEpisodeById(id);
    return deletedEposode;
  }
  







}

module.exports = EpisodeService;
