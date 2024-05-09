/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  UpgradeL1Bridge,
  UpgradeL1BridgeInterface,
} from "../../contracts/UpgradeL1Bridge";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldHashed",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newHashed",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "claimer",
        type: "address",
      },
    ],
    name: "EDITED",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ERC20DepositInitiated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ERC20WithdrawalFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ETHDepositInitiated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ETHWithdrawalFinalized",
    type: "event",
  },
  {
    inputs: [],
    name: "active",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_l2Gas",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "depositERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_l2Gas",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "depositERC20To",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_l2Gas",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "depositETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_l2Gas",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "depositETHTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "deposits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "doActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "donateETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_old",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_new",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_claimer",
        type: "address",
      },
    ],
    name: "editMigration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "finalizeERC20Withdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "finalizeETHWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "forceWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct UpgradeL1Bridge.ClaimParam[]",
        name: "_params",
        type: "tuple[]",
      },
    ],
    name: "forceWithdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_claimer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "generateKey",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1messenger",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2TokenBridge",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "l2TokenBridge",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "messenger",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "claimer",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32",
          },
        ],
        internalType: "struct UpgradeL1Bridge.AssetsParam[]",
        name: "_params",
        type: "tuple[]",
      },
    ],
    name: "registry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "claimer",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32",
          },
        ],
        internalType: "struct UpgradeL1Bridge.AssetsParam[]",
        name: "_params",
        type: "tuple[]",
      },
    ],
    name: "verifyRegistry",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "claimer",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32",
          },
        ],
        internalType: "struct UpgradeL1Bridge.AssetsParam",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080806040523461003057600080546001600160a01b03191690556004805460ff19169055611cb790816100368239f35b600080fdfe60806040526004361015610023575b361561001957600080fd5b61002161140d565b005b60003560e01c806302fb0c5e146101535780631532ec341461014e57806317971947146101495780633cb747bf14610144578063485cc9551461013f5780634ad837061461013a57806357490b061461013557806358a997f6146101305780635f3290291461012b578063838b2520146101265780638b4c40b0146101215780638f601f661461011c57806391c49bf814610117578063952d8796146101125780639a2ac6d51461010d578063a9f9e67514610108578063aaaf7c4514610103578063b1a1a882146100fe5763e41e6c930361000e57610b1d565b610ac7565b610a7b565b610955565b6108f7565b6108ce565b61089a565b610836565b610828565b6107af565b610667565b6105ed565b610552565b6104fd565b61040d565b6103b1565b610370565b6101c7565b3461017657600060031936011261017657602060ff600454166040519015158152f35b600080fd5b73ffffffffffffffffffffffffffffffffffffffff81160361017657565b9181601f840112156101765782359167ffffffffffffffff8311610176576020838186019501011161017657565b34610176576080600319360112610176576004356101e48161017b565b602435906101f18261017b565b60643567ffffffffffffffff811161017657610211903690600401610199565b9161023160015473ffffffffffffffffffffffffffffffffffffffff1690565b93600473ffffffffffffffffffffffffffffffffffffffff602061028861026f836000541673ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1690565b61029583821633146118c4565b604051938480927f6e296e450000000000000000000000000000000000000000000000000000000082525afa90811561031e57610021976102e3936000936102ec575b508116911614611970565b604435916119fb565b829193506103109060203d8111610317575b6103088183610d28565b81019061194f565b92906102d8565b503d6102fe565b611964565b9060206003198301126101765760043567ffffffffffffffff9283821161017657806023830112156101765781600401359384116101765760248460061b83010111610176576024019190565b3461017657604061038961038336610323565b90610d5a565b602082519173ffffffffffffffffffffffffffffffffffffffff815116835201516020820152f35b3461017657600060031936011261017657602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b6003196040910112610176576004356103fd8161017b565b9060243561040a8161017b565b90565b346101765761041b366103e5565b906000549173ffffffffffffffffffffffffffffffffffffffff928381166104795783927fffffffffffffffffffffffff00000000000000000000000000000000000000009485911691161760005516906001541617600155600080f35b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f436f6e74726163742068617320616c7265616479206265656e20696e6974696160448201527f6c697a65642e00000000000000000000000000000000000000000000000000006064820152fd5b346101765761050b36610323565b60005b81811061051757005b8061054861052961054d938587610c61565b356105338161017b565b6020610540848789610c61565b013590610f05565b610c2f565b61050e565b346101765760606003193601126101765760206004356105718161017b565b6105d46105e2602435926105848461017b565b6040519283918683019560443591879190604893917fffffffffffffffffffffffffffffffffffffffff000000000000000000000000809260601b16845260601b16601483015260288201520190565b03601f198101835282610d28565b519020604051908152f35b346101765760a06003193601126101765760043561060a8161017b565b602435906106178261017b565b6064359163ffffffff83168303610176576084359267ffffffffffffffff84116101765761064c610021943690600401610199565b93909261065a333b156113a8565b60443591339133916116e5565b346101765760606003193601126101765760443560043560243561068a8361017b565b3361074c5773ffffffffffffffffffffffffffffffffffffffff60009383855260036020526106de604086207fffffffffffffffffffffffff00000000000000000000000000000000000000008154169055565b8285526040852080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831617905516917ff1a501a1b0980ae8d6861fc0a53d9309b8ac7acad0128a5294a1efd794a4e7e48480a480f35b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4f6e6c7920436c6f7365720000000000000000000000000000000000000000006044820152606490fd5b0390fd5b346101765760c0600319360112610176576004356107cc8161017b565b602435906107d98261017b565b604435906107e68261017b565b60843563ffffffff811681036101765760a4359367ffffffffffffffff85116101765761081a610021953690600401610199565b9490936064359233916116e5565b600060031936011261017657005b3461017657602061089173ffffffffffffffffffffffffffffffffffffffff61085e366103e5565b91166000526002835260406000209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b54604051908152f35b3461017657600060031936011261017657602073ffffffffffffffffffffffffffffffffffffffff60015416604051908152f35b34610176576040600319360112610176576100216004356108ee8161017b565b60243590610f05565b60606003193601126101765760043561090f8161017b565b6024359063ffffffff82168203610176576044359167ffffffffffffffff83116101765761094e610947610021943690600401610199565b36916114f6565b9133611544565b346101765760c0600319360112610176576004356109728161017b565b6024359061097f8261017b565b60443561098b8161017b565b606435916109988361017b565b60a43567ffffffffffffffff8111610176576109b8903690600401610199565b9390926109da60015473ffffffffffffffffffffffffffffffffffffffff1690565b95600473ffffffffffffffffffffffffffffffffffffffff6020610a1861026f836000541673ffffffffffffffffffffffffffffffffffffffff1690565b610a2583821633146118c4565b604051938480927f6e296e450000000000000000000000000000000000000000000000000000000082525afa90811561031e5761002199610a72936000936102ec57508116911614611970565b60843593611a77565b34610176576000600319360112610176573361074c576004547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0060ff8083161516911617600455600080f35b60406003193601126101765760043563ffffffff81168103610176576024359067ffffffffffffffff821161017657610b15610b0a610021933690600401610199565b610947333b156113a8565b903333611544565b3461017657610b2b36610323565b3361074c5760005b818110610b3c57005b610b8490602080610b4e838688610c61565b0135600052600390818152604073ffffffffffffffffffffffffffffffffffffffff81600020541615610b89575b505050610c2f565b610b33565b610bf892610b9885888a610c61565b3592610ba38461017b565b80610baf878a8c610c61565b0135600052526000209073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b388080610b7c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c5c5760010190565b610c00565b9190811015610c715760061b0190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810190811067ffffffffffffffff821117610ceb57604052565b610ca0565b6020810190811067ffffffffffffffff821117610ceb57604052565b60a0810190811067ffffffffffffffff821117610ceb57604052565b90601f601f19910116810190811067ffffffffffffffff821117610ceb57604052565b60405190610d5882610ccf565b565b90604091825192610d6a84610ccf565b60009283855283602080960152835b818110610d965750505050610d8c610d4b565b9181835282015290565b85610da2828487610c61565b013585526003865273ffffffffffffffffffffffffffffffffffffffff838620541615610dd757610dd290610c2f565b610d79565b90610de59293959495610c61565b928184360312610e13575081905192610dfd84610ccf565b8035610e088161017b565b845201359082015290565b80fd5b67ffffffffffffffff8111610ceb57601f01601f191660200190565b604051610e3e81610cf0565b60008152906000368137565b3d15610e75573d90610e5b82610e16565b91610e696040519384610d28565b82523d6000602084013e565b606090565b15610e8157565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f5472616e7366657248656c7065723a3a736166655472616e736665724554483a60448201527f20455448207472616e73666572206661696c65640000000000000000000000006064820152fd5b604051606082811b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116602084019081523390921b166034830152604880830185905282529190601f1990610f5d606882610d28565b610fa8610f8e73ffffffffffffffffffffffffffffffffffffffff9586935190206000526003602052604060002090565b5473ffffffffffffffffffffffffffffffffffffffff1690565b16338114908115916110f6575b506110975761103461105c916040516110216020820192826110158a338a889190604893917fffffffffffffffffffffffffffffffffffffffff000000000000000000000000809260601b16845260601b16601483015260288201520190565b03908101835282610d28565b5190206000526003602052604060002090565b7fffffffffffffffffffffffff00000000000000000000000000000000000000008154169055565b168061108b5750600080610d5892611072610e32565b9060208251920190335af1611085610e4a565b50610e7a565b90610d589133906110ff565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f6e6f7420636c61696d65720000000000000000000000000000000000000000006044820152606490fd5b90501538610fb5565b9173ffffffffffffffffffffffffffffffffffffffff604051927fa9059cbb000000000000000000000000000000000000000000000000000000006020850152166024830152604482015260448152608081019181831067ffffffffffffffff841117610ceb57610d5892604052611215565b90816020910312610176575180151581036101765790565b1561119157565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff16906040519061123982610ccf565b6020928383527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656484840152803b156112b0576000828192828761128b9796519301915af1611285610e4a565b9061134e565b8051908161129857505050565b82610d58936112ab938301019101611172565b61118a565b606484604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b919082519283825260005b84811061133a575050601f19601f8460006020809697860101520116010190565b602081830181015184830182015201611319565b9091901561135a575090565b81511561136a5750805190602001fd5b6107ab906040519182917f08c379a000000000000000000000000000000000000000000000000000000000835260206004840152602483019061130e565b156113af57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4163636f756e74206e6f7420454f4100000000000000000000000000000000006044820152fd5b611418333b156113a8565b60405161142481610cf0565b600081526114bd6040517f662a633a0000000000000000000000000000000000000000000000000000000060208201526000602482015273deaddeaddeaddeaddeaddeaddeaddeaddead000060448201523360648201523360848201523460a482015260c060c482015261149f816105d460e482018661130e565b60015473ffffffffffffffffffffffffffffffffffffffff16611b58565b604051907f35d79ab81f2b2017e19afb5c5571778877782d7a8786f5907f93b0f4702f4f233392806114f13394348361152d565b0390a3565b92919261150282610e16565b916115106040519384610d28565b829481845281830111610176578281602093846000960137010152565b60409061040a93928152816020820152019061130e565b7f35d79ab81f2b2017e19afb5c5571778877782d7a8786f5907f93b0f4702f4f2391929361162b6114f192604051907f662a633a0000000000000000000000000000000000000000000000000000000060208301526000602483015273deaddeaddeaddeaddeaddeaddeaddeaddead0000604483015273ffffffffffffffffffffffffffffffffffffffff8091169687606484015216968760848301523460a483015260c060c483015261160d826115ff60e482018761130e565b03601f198101845283610d28565b60015473ffffffffffffffffffffffffffffffffffffffff16611bf4565b604051918291348361152d565b601f8260209493601f19938186528686013760008582860101520116010190565b929361040a9795929160c09573ffffffffffffffffffffffffffffffffffffffff809481809416885216602087015216604085015216606083015260808201528160a08201520191611638565b91908201809211610c5c57565b61040a949273ffffffffffffffffffffffffffffffffffffffff60609316825260208201528160408201520191611638565b9395969092919673ffffffffffffffffffffffffffffffffffffffff9485811696846040519a60208c017f23b872dd0000000000000000000000000000000000000000000000000000000090528881169b8c60248201523060448201528b60648201526064815261175581610d0c565b61175f908b611215565b8386868d604051958695602087017f662a633a0000000000000000000000000000000000000000000000000000000090528d602488019661179f97611659565b03601f19810182526117b19082610d28565b60015473ffffffffffffffffffffffffffffffffffffffff16916117d492611bf4565b8488816118018473ffffffffffffffffffffffffffffffffffffffff166000526002602052604060002090565b9061182b919073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b5490611836916116a6565b916118619073ffffffffffffffffffffffffffffffffffffffff166000526002602052604060002090565b9061188b919073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b55604051948594169661189e93856116b3565b037f718594027abd4eaed59f95162563e0cc6d0e8d5b86b1c7be8b1b0ac3343d039691a4565b156118cb57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4f564d5f58434841494e3a206d657373656e67657220636f6e7472616374207560448201527f6e61757468656e746963617465640000000000000000000000000000000000006064820152fd5b90816020910312610176575161040a8161017b565b6040513d6000823e3d90fd5b1561197757565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f4f564d5f58434841494e3a2077726f6e672073656e646572206f662063726f7360448201527f732d646f6d61696e206d657373616765000000000000000000000000000000006064820152fd5b9392916114f17f2ac69ee804d9a7a0984249f508dfab7cb2534b465b6ce1580f99a38ba9c5e63193611a43600080611a31610e32565b60208151910187895af1611085610e4a565b60405193849384526040602085015273ffffffffffffffffffffffffffffffffffffffff8091169716956040840191611638565b91909593929473ffffffffffffffffffffffffffffffffffffffff80931694856000526002602052611acd8860406000209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b5491858303928311610c5c577f3ceee06c1e37648fcbb6ed52e17b3e1f275a1f8c7b22a84b2b84732431e046b395611b5393886000526002602052611b368b60406000209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b55611b42818a8a6110ff565b85604051968796169a1698856116b3565b0390a4565b73ffffffffffffffffffffffffffffffffffffffff918260005416803b1561017657611bc69360008094604051968795869485937f3dbb202b00000000000000000000000000000000000000000000000000000000855216600484015260606024840152606483019061130e565b62030d40604483015203925af1801561031e57611be05750565b67ffffffffffffffff8111610ceb57604052565b909173ffffffffffffffffffffffffffffffffffffffff806000541690813b156101765760008094611c699663ffffffff604051988997889687957f3dbb202b00000000000000000000000000000000000000000000000000000000875216600486015260606024860152606485019061130e565b9116604483015203925af1801561031e57611be0575056fea26469706673582212209d6afa8fd497ffc0d224f865247f3e0c59b2c0ff7ec5398eeb32d2aa4c8afe9664736f6c63430008140033";

type UpgradeL1BridgeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpgradeL1BridgeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpgradeL1Bridge__factory extends ContractFactory {
  constructor(...args: UpgradeL1BridgeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UpgradeL1Bridge> {
    return super.deploy(overrides || {}) as Promise<UpgradeL1Bridge>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UpgradeL1Bridge {
    return super.attach(address) as UpgradeL1Bridge;
  }
  override connect(signer: Signer): UpgradeL1Bridge__factory {
    return super.connect(signer) as UpgradeL1Bridge__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeL1BridgeInterface {
    return new utils.Interface(_abi) as UpgradeL1BridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeL1Bridge {
    return new Contract(address, _abi, signerOrProvider) as UpgradeL1Bridge;
  }
}
