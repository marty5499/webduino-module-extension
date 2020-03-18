Blockly.JavaScript['iframe_open'] = function (block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "createIframe(" + value_url + ");";
  return code;
};