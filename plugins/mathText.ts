import { Plugin } from '../types';
import { toMathFont } from '../utils/textTransform';

export const mathTextPlugin: Plugin = {
    name: 'mathText',
    description: 'Transforms text to mathematical font style',

    // Transform outgoing messages
    async transformOutgoing(message: any) {
        if (message.platform === 'twitter') {
            if (typeof message.content === 'string') {
                message.content = toMathFont(message.content);
            } else if (message.content?.text) {
                message.content.text = toMathFont(message.content.text);
            }
        }
        return message;
    },

    // No transformation for incoming messages
    async transformIncoming(message: any) {
        return message;
    }
};