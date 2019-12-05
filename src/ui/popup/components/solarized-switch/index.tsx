import {m} from 'malevic';
import {CheckBox} from '../../../controls';
import {FilterConfig} from "../../../../definitions";

interface SolarizedSwitchProps {
    config: FilterConfig;
    onChange: (config: Partial<FilterConfig>) => void;
}

export default function SolarizedSwitch({config, onChange}: SolarizedSwitchProps) {
    return (
        <section class="solarized-switch">
            <div class="solarized-switch__solarized-switch-container">
                    <CheckBox
                        checked={config.solarized}
                        onchange={(e) => onChange({solarized: e.target.checked})}
                    />
                <label class="solarized-switch__solarized-switch-container__label">
                    Solarized
                </label>
            </div>
        </section>
    );
}
