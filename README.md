# honja-server
多言語ひらがな翻字ツール「[HONJA](https://github.com/TakutoYoshikai/honja)」のAPIサーバー

### Requirements
* Node.js
* npm

### Usage
**install**
```bash
npm install --save TakutoYoshikai/honja-server
```

**run server**
```javascript
const HonjaServer = require("honja-server");

HonjaServer.listen(3000); // listen on http://localhost:3000/
```

**access**
```bash
curl http://localhost:3000/Korean/こんにちは
curl http://localhost:3000/Thai/こんにちは
curl http://localhost:3000/All/こんにちは
```

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### License
MIT License
