import axios from "axios";

const config = {
  headers: {
    Authorization:
      "Bearer 1A1A0BDAAFB770FECEAFD9D57EF7D53896F9E9AE15C74BC3321398F0B2C39057",
  },
};
/*https://apitest.nilvera.com/einvoice/Statistics/Sale?StartDate=2022-11-09T00:00:00.000Z&EndDate=2022-11-09T23:59:00.000Z */
export const action = {
  earchive: async () => {
    await axios
      .get("https://apitest.nilvera.com/earchive/Statistics", config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw new Error(err.data);
      });
  },
  sale: async () => {
    await axios
      .get(
        "https://apitest.nilvera.com/einvoice/Statistics/Sale?StartDate=2022-11-09T00:00:00.000Z&EndDate=2022-11-09T23:59:00.000Z",
        config
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw new Error(err.data);
      });
  },
  purchase: async () => {
    await axios
      .get(
        "https://apitest.nilvera.com/einvoice/Statistics/Purchase?StartDate=2022-11-09T00:00:00.000Z&EndDate=2022-11-09T23:59:00.000Z",
        config
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw new Error(err.data);
      });
  },
};

export default action;
