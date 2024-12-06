// Mathematical font character mappings
const mathFontMap: Record<string, string> = {
    'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖',
    'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛',
    'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠',
    'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥',
    'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪',
    'z': '𝕫', 'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻',
    'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀',
    'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ',
    'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊',
    'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏',
    'Y': '𝕐', 'Z': 'ℤ', '0': '𝟘', '1': '𝟙', '2': '𝟚',
    '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟',
    '8': '𝟠', '9': '𝟡'
};

function toMathFont(text: string): string {
    return text.split('').map(char => mathFontMap[char] || char).join('');
}

export function createMathTextPlugin() {
    return {
        name: 'mathText',
        description: 'Transforms text to mathematical font style',
        actions: [],
        evaluators: [{
            name: 'transformText',
            description: 'Transforms text to mathematical font style',
            similes: ['Converts text to fancy math font'],
            examples: [],
            handler: async (message: any) => {
                if (message.platform === 'twitter') {
                    if (typeof message.content === 'string') {
                        message.content = toMathFont(message.content);
                    } else if (message.content?.text) {
                        message.content.text = toMathFont(message.content.text);
                    }
                }
                return message;
            },
            validate: async function (runtime: any, message: any): Promise<boolean> {
                return typeof message.content === 'string' || typeof message.content?.text === 'string';
            }
        }],
        providers: []
    } as const;
}

export default createMathTextPlugin;