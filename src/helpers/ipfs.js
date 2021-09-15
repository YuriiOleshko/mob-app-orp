import ipfsClient from 'ipfs-http-client';
import createIpfsHttpClient from 'ipfs-http-client'
import axios from "axios";
// import uint8arrays from 'uint8arrays';

export const initIPFS = async () => {
    const ipfs =     createIpfsHttpClient('https://ipfs.infura.io:5001')

    // ipfsClient({
    //     host: 'ipfs.infura.io',
    //     port: 5001,
    //     protocol: 'https',
    // });
    console.log(ipfs,'Fipfs')
    return ipfs;
};
// const api = axios.create({
//     baseURL: "https://ipfs.infura.io:5001/api/v0/add?wrap-with-directory=true",
//     headers: {
//         "Content-Type": "multipart/form-data",
//     },
// });

// initIPFS();
// export const testAuthentication = () => {
//   const url = 'https://api.pinata.cloud/data/testAuthentication';
//   return axios
//     .get(url, {
//       headers: {
//         pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
//         pinata_secret_api_key: process.env.REACT_APP_PINATA_API_SECRET_KEY,
//       },
//     })
//     .then((response) => {
//       // handle your response here
//       console.log(response, 'response');
//     })
//     .catch((error) => {
//       // handle error here
//       console.log(error, 'error');
//     });
// };
export const addFilesToIpfs = async (data)=>{
    let form = new FormData();
    form.append('path', JSON.stringify(data));
    console.log(form,'form');
    let config = {
        method: 'post',
        url: 'https://1x589Wf0bGYEc1dhSmPCbTlumFQ:cacb603095351699082f9e83396ea0bb@ipfs.infura.io:5001/api/v0/add',
        data : form
    };
    // await (async () => {
        try {
            const res = await axios(config)
                .then(function (response) {
                    console.log(response.data, 'response.data');
                    return response;
                })
            return  res.data
        } catch(err){
        console.log(err,"errorIpfs")
        return  false
    }
    // })()

    // return res;
    // console.log(res,'RUDUAr')
}
export const getJSONFileFromIpfs = async (cid) => {
    let config = {
        method: 'get',
        url: `https://ipfs.infura.io:5001/api/v0/cat?arg=${cid}`,
        headers: { }
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            return JSON.stringify(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

};

export const getFilesFromDirectory = async (client, cid) => {
    const updateArray = [];
    for await (const file of client.get(cid)) {
        // eslint-disable-next-line no-continue
        if (!file.content) continue;
        updateArray.push({ path: file.path.split('/')[1] });
        const content = [];
        for await (const chunk of file.content) {
            content.push(chunk);
        }
    }
    return updateArray;
};

export const getFilesFromDirWithContent = async (client, cid) => {
    const updateArray = [];
    for await (const file of client.get(cid)) {
        // eslint-disable-next-line no-continue
        if (!file.content) continue;
        const content = [];
        for await (const chunk of file.content) {
            content.push(chunk);
        }
        updateArray.push({ path: file.path.split('/')[1], content });
    }
    return updateArray;
};

export const addAllFiles = async (client, files) => {
    const options = {
        pin: true,
        wrapWithDirectory: true,
        timeout: 10000,
    };

    for await (const result of client.addAll(files, options)) {
        console.log(result);
    }
};
