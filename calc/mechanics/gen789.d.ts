import type { Generation } from '../data/interface';
import type { RawDesc } from '../desc';
import type { Field } from '../field';
import type { Move } from '../move';
import type { Pokemon } from '../pokemon';
import { Result } from '../result';
export declare function calculateSMSSSV(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field): Result;
export declare function calculateBasePowerSMSSSV(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, hasAteAbilityTypeChange: boolean, desc: RawDesc, hit?: number): number;
export declare function calculateBPModsSMSSSV(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, desc: RawDesc, basePower: number, hasAteAbilityTypeChange: boolean, turnOrder: string): number[];
export declare function calculateAttackSMSSSV(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, desc: RawDesc, isCritical?: boolean): number;
export declare function calculateAtModsSMSSSV(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, desc: RawDesc): number[];
export declare function calculateDefenseSMSSSV(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, desc: RawDesc, isCritical?: boolean): number;
export declare function calculateDfModsSMSSSV(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, desc: RawDesc, isCritical?: boolean, hitsPhysical?: boolean): number[];
export declare function calculateFinalModsSMSSSV(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, desc: RawDesc, isCritical: boolean | undefined, typeEffectiveness: number, hitCount?: number): number[];
