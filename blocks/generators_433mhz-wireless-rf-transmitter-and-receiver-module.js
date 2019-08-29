Blockly.JavaScript['_433mhz_wireless_rf_transmitter'] = function(block) {
  var text_433mhz_wireless_rf_transmitter_interrupt_pin = block.getFieldValue('433MHZ_WIRELESS_RF_TRANSMITTER_INTERRUPT_PIN');
  // TODO: Assemble JavaScript into code variable.
  var code = `
	#EXTINC
		#include <RCSwitch.h>

		RCSwitch MyRCSwitch = RCSwitch();
	#END
	#SETUP
		MyRCSwitch.enableTransmit(${text_433mhz_wireless_rf_transmitter_interrupt_pin});
	#END
  `;
  return code;
};

Blockly.JavaScript['_433mhz_wireless_rf_transmitter_send'] = function(block) {
  var value_433mhz_wireless_rf_transmitter_send_message = Blockly.JavaScript.valueToCode(block, '433MHZ_WIRELESS_RF_TRANSMITTER_SEND_MESSAGE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `
	MyRCSwitch.send(${value_433mhz_wireless_rf_transmitter_send_message}, 24);
  `;
  return code;
};

Blockly.JavaScript['_433mhz_wireless_rf_receiver'] = function(block) {
  var text_433mhz_wireless_rf_receiver_interrupt_pin = block.getFieldValue('433MHZ_WIRELESS_RF_RECEIVER_INTERRUPT_PIN');
  var variable_rf_receive_value = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RF_RECEIVE_VALUE'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `
	#EXTINC
		#include <RCSwitch.h>

		RCSwitch MyRCSwitch = RCSwitch();
	#END
	#SETUP
		MyRCSwitch.enableReceive(${text_433mhz_wireless_rf_receiver_interrupt_pin});
	#END

	if (MyRCSwitch.available()) {
		int value = MyRCSwitch.getReceivedValue();

		if (value != 0) {
			${variable_rf_receive_value} = MyRCSwitch.getReceivedValue();
		}
		MyRCSwitch.resetAvailable();
	}
  `;
  return code;
};