import { ThreatLevelEnum } from '../types';
export function threatLevelOptionChecked(threatLevel: ThreatLevelEnum, value?: ThreatLevelEnum): boolean {
    return value === threatLevel;
}

export function threatLevelOptionCheckedClasName(threatLevel: ThreatLevelEnum, value?: ThreatLevelEnum): string {
    return threatLevelOptionChecked(threatLevel, value) ? " active" : "";
}
