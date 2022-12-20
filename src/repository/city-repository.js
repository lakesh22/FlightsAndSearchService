const { City } = require("../models/index");
class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name }); //by doing { name } we can directly access name without writing obj.name
      return city;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }
  async updateCity(cityId, data) {
    //there are different ways to update
    try {
      const city = await City.update(data, {
        //city variable stores the answer of the query which will be returned
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }
}
module.exports = CityRepository;
