import { ThreatLevelEnum } from '../types';
export function threatLevelOptionChecked(threatLevel: ThreatLevelEnum, value?: ThreatLevelEnum): boolean {
    return value === threatLevel;
}
