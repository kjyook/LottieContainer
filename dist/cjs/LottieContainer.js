"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LottieContainer = void 0;
const react_1 = __importStar(require("react"));
const lottie_web_1 = __importDefault(require("lottie-web"));
const styled_1 = __importDefault(require("@emotion/styled"));
const LottieContainer = ({ path, width, height }) => {
    const lottieContainer = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        lottie_web_1.default.loadAnimation({
            container: lottieContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: path,
        });
        return () => lottie_web_1.default.destroy();
    }, []);
    const Root = styled_1.default.div `
        width: ${width};
        height: ${height};
    `;
    return (<Root ref={lottieContainer}/>);
};
exports.LottieContainer = LottieContainer;
