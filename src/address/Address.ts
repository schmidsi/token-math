import isAddress from './isAddress';
import * as Web3Utils from 'web3-utils';

/**
 * Dummy classes to achieve typesafety.
 * DO NOT ADD METHODS
 */

export default class Address extends String {
  constructor(address: string) {
    if (!isAddress(address)) {
      throw new TypeError(`Invalid address ${address}`);
    }
    super(Web3Utils.toChecksumAddress(address));
  }
}
