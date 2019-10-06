/* TypeScript file generated by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const CreateBucklescriptBlock = require('bs-platform/lib/es6/block.js');

// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const TypesTransformerBS = require('./TypesTransformer.bs');

import {operationType as Types_operationType} from '../../src/generator/Types.gen';

export const printFromFlowTypes: (_1:{ readonly content: string; readonly operationType: Types_operationType }) => string = function (Arg1: any) {
  const result = Curry._2(TypesTransformerBS.printFromFlowTypes, Arg1.content, Arg1.operationType.tag==="Fragment"
    ? CreateBucklescriptBlock.__(0, Arg1.operationType.value)
    : Arg1.operationType.tag==="Mutation"
    ? CreateBucklescriptBlock.__(1, [Arg1.operationType.value])
    : Arg1.operationType.tag==="Subscription"
    ? CreateBucklescriptBlock.__(2, [Arg1.operationType.value])
    : CreateBucklescriptBlock.__(3, [Arg1.operationType.value]));
  return result
};
