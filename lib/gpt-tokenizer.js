module.exports = function (RED) {
  const gt = require('gpt-tokenizer');

  function gptTokenizer(config) {
    RED.nodes.createNode(this, config);
    var self = this;
    this.on('input', function(msg) {

      msg.payload =  gt.encode(msg.payload);
      self.send(msg);
    });
  }
  RED.nodes.registerType('gpt-tokenizer', gptTokenizer);
};
