const { Client } = require('../database/models');

const getAllClients = async () => {
  const clients = await Client.findAll();

  return clients;
}

const createClient = async ({ fullName }) => {
  const newClient = await Client.create({ fullName });

  return newClient;
};

const getClientIdByName = async (clientName) => {
  const clients = await getAllClients();
  const clientById = await clients.find((item) => item.fullName === clientName);

  if (!clientById) {
    const response = {
      fullName: clientName,
    };

    const newClient = await createClient(response);
    return newClient.dataValues.id;
  }

  return clientById.dataValues.id;
};

module.exports = {
  getAllClients,
  createClient,
  getClientIdByName,
};
