/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  L1ChugSplashProxy,
  L1ChugSplashProxyInterface,
} from "../../../../../../../sub/packages/tokamak/contracts/contracts/chugsplash/L1ChugSplashProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "getImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_code",
        type: "bytes",
      },
    ],
    name: "setCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_value",
        type: "bytes32",
      },
    ],
    name: "setStorage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405162000e8938038062000e89833981810160405281019061003491906100d2565b6100438161004960201b60201c565b506100ff565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035550565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009f82610074565b9050919050565b6100af81610094565b81146100ba57600080fd5b50565b6000815190506100cc816100a6565b92915050565b6000602082840312156100e8576100e761006f565b5b60006100f6848285016100bd565b91505092915050565b610d7a806200010f6000396000f3fe60806040526004361061004e5760003560e01c806313af4035146100595780636c5d4ad014610082578063893d20e8146100ab5780639b0b0fda146100d6578063aaf10f42146100ff5761004f565b5b61005761012a565b005b34801561006557600080fd5b50610080600480360381019061007b91906107c1565b61031a565b005b34801561008e57600080fd5b506100a960048036038101906100a49190610934565b6103a6565b005b3480156100b757600080fd5b506100c06104f2565b6040516100cd919061098c565b60405180910390f35b3480156100e257600080fd5b506100fd60048036038101906100f891906109dd565b610581565b005b34801561010b57600080fd5b50610114610608565b604051610121919061098c565b60405180910390f35b6000610134610697565b90506000808273ffffffffffffffffffffffffffffffffffffffff1663b794726260e01b604051602401604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516101c89190610a8e565b600060405180830381855afa9150503d8060008114610203576040519150601f19603f3d011682016040523d82523d6000602084013e610208565b606091505b509150915081801561021b575060208151145b1561027d576000818060200190518101906102369190610adb565b90506000811461027b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161027290610b8b565b60405180910390fd5b505b60006102876106c5565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036102f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ef90610c1d565b60405180910390fd5b3660008037600080366000845af43d6000803e80610315573d6000fd5b3d6000f35b610322610697565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806103875750600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1561039a57610395816106f3565b6103a3565b6103a261012a565b5b50565b6103ae610697565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806104135750600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b156104e65760006104226106c5565b905061042d81610719565b82805190602001200361044057506104e1565b60006c600d380380600d6000396000f360981b83604051602001610465929190610c8a565b604051602081830303815290604052905060008151602083016000f09050838051906020012061049482610719565b146104d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cb90610d24565b60405180910390fd5b6104dd81610729565b5050505b6104ef565b6104ee61012a565b5b50565b60006104fc610697565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806105615750600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b156105755761056e610697565b905061057e565b61057d61012a565b5b90565b610589610697565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806105ee5750600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b156105fb57808255610604565b61060361012a565b5b5050565b6000610612610697565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806106775750600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1561068b576106846106c5565b9050610694565b61069361012a565b5b90565b6000807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490508091505090565b6000807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490508091505090565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035550565b600080823f905080915050919050565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5550565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061078e82610763565b9050919050565b61079e81610783565b81146107a957600080fd5b50565b6000813590506107bb81610795565b92915050565b6000602082840312156107d7576107d6610759565b5b60006107e5848285016107ac565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610841826107f8565b810181811067ffffffffffffffff821117156108605761085f610809565b5b80604052505050565b600061087361074f565b905061087f8282610838565b919050565b600067ffffffffffffffff82111561089f5761089e610809565b5b6108a8826107f8565b9050602081019050919050565b82818337600083830152505050565b60006108d76108d284610884565b610869565b9050828152602081018484840111156108f3576108f26107f3565b5b6108fe8482856108b5565b509392505050565b600082601f83011261091b5761091a6107ee565b5b813561092b8482602086016108c4565b91505092915050565b60006020828403121561094a57610949610759565b5b600082013567ffffffffffffffff8111156109685761096761075e565b5b61097484828501610906565b91505092915050565b61098681610783565b82525050565b60006020820190506109a1600083018461097d565b92915050565b6000819050919050565b6109ba816109a7565b81146109c557600080fd5b50565b6000813590506109d7816109b1565b92915050565b600080604083850312156109f4576109f3610759565b5b6000610a02858286016109c8565b9250506020610a13858286016109c8565b9150509250929050565b600081519050919050565b600081905092915050565b60005b83811015610a51578082015181840152602081019050610a36565b60008484015250505050565b6000610a6882610a1d565b610a728185610a28565b9350610a82818560208601610a33565b80840191505092915050565b6000610a9a8284610a5d565b915081905092915050565b6000819050919050565b610ab881610aa5565b8114610ac357600080fd5b50565b600081519050610ad581610aaf565b92915050565b600060208284031215610af157610af0610759565b5b6000610aff84828501610ac6565b91505092915050565b600082825260208201905092915050565b7f4c314368756753706c61736850726f78793a2073797374656d2069732063757260008201527f72656e746c79206265696e672075706772616465640000000000000000000000602082015250565b6000610b75603583610b08565b9150610b8082610b19565b604082019050919050565b60006020820190508181036000830152610ba481610b68565b9050919050565b7f4c314368756753706c61736850726f78793a20696d706c656d656e746174696f60008201527f6e206973206e6f74207365742079657400000000000000000000000000000000602082015250565b6000610c07603083610b08565b9150610c1282610bab565b604082019050919050565b60006020820190508181036000830152610c3681610bfa565b9050919050565b60007fffffffffffffffffffffffffff0000000000000000000000000000000000000082169050919050565b6000819050919050565b610c84610c7f82610c3d565b610c69565b82525050565b6000610c968285610c73565b600d82019150610ca68284610a5d565b91508190509392505050565b7f4c314368756753706c61736850726f78793a20636f646520776173206e6f742060008201527f636f72726563746c79206465706c6f7965642e00000000000000000000000000602082015250565b6000610d0e603383610b08565b9150610d1982610cb2565b604082019050919050565b60006020820190508181036000830152610d3d81610d01565b905091905056fea2646970667358221220a9f916768a8789fbf540a94f3dd3da618a4bb1289f05783b9ac481804bf1b08664736f6c63430008140033";

type L1ChugSplashProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: L1ChugSplashProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class L1ChugSplashProxy__factory extends ContractFactory {
  constructor(...args: L1ChugSplashProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<L1ChugSplashProxy> {
    return super.deploy(_owner, overrides || {}) as Promise<L1ChugSplashProxy>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): L1ChugSplashProxy {
    return super.attach(address) as L1ChugSplashProxy;
  }
  override connect(signer: Signer): L1ChugSplashProxy__factory {
    return super.connect(signer) as L1ChugSplashProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): L1ChugSplashProxyInterface {
    return new utils.Interface(_abi) as L1ChugSplashProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1ChugSplashProxy {
    return new Contract(address, _abi, signerOrProvider) as L1ChugSplashProxy;
  }
}
