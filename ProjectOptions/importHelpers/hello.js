import { __awaiter } from "tslib";
export const hello = () => new Promise(resolve => resolve('hello'));
export const say = () => __awaiter(void 0, void 0, void 0, function* () { return yield hello(); });
