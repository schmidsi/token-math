import * as web3Utils from 'web3-utils';
import Address from './Address';
import ensure from '../utils/ensure';

const isAddress = (address: string | Address): boolean =>
  address instanceof Address ||
  address.length === 42 &&
  web3Utils.isAddress(address) &&
  web3Utils.isHexStrict(address);

export const ensureAddress = (address: string) =>
  ensure(isAddress(address), `${address} is not a vaild address`, address);

export default isAddress;
