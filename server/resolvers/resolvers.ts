import client from "../controllers/client.controller";

const Query = {
  clients: async () => {
    return await client.getAllClients();
  }
};

export default { Query };
