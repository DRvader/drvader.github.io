/* tslint:disable */
/* eslint-disable */
/**
*/
export function main(): void;
/**
* @param {string} file_id
* @param {string} text_id
* @returns {Promise<PDFOutput>}
*/
export function remove_pages(file_id: string, text_id: string): Promise<PDFOutput>;
/**
*/
export class PDFOutput {
  free(): void;
/**
*/
  data: Blob;
/**
*/
  name: string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly main: () => void;
  readonly __wbg_pdfoutput_free: (a: number) => void;
  readonly __wbg_get_pdfoutput_data: (a: number) => number;
  readonly __wbg_set_pdfoutput_data: (a: number, b: number) => void;
  readonly __wbg_get_pdfoutput_name: (a: number, b: number) => void;
  readonly __wbg_set_pdfoutput_name: (a: number, b: number, c: number) => void;
  readonly remove_pages: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h205dffabd823c4de: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h07feb581aa7f3096: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
