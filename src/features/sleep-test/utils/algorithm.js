import { MATTRESS_DB } from '../data/mattressDb';
import { SIZE_MAP } from '../data/steps';

export function scoreMatress(mattress, answers) {
    let score = 0;
    const { sleep_position, comfort_level, body_weight, mattress_size, sleep_priority } = answers;

    // 1. Position match (+3 exact, +1 partial)
    if (sleep_position && mattress.ideal_position.includes(sleep_position)) score += 3;
    else if (sleep_position && mattress.ideal_position.includes('combinado')) score += 1;

    // 2. Firmness match
    if (comfort_level) {
        if (comfort_level === 'no_se') {
            score += 1; // neutral
        } else if (mattress.firmness.includes(comfort_level)) {
            score += 3;
        } else if (
            (comfort_level === 'firme' && mattress.firmness.includes('muy_firme')) ||
            (comfort_level === 'intermedio' && (mattress.firmness.includes('firme') || mattress.firmness.includes('suave')))
        ) {
            score += 1;
        }
    }

    // 3. Weight support match
    if (body_weight && mattress.weight_support.includes(body_weight)) score += 3;

    // 4. Size availability match
    if (mattress_size) {
        const sizeLabel = SIZE_MAP[mattress_size];
        if (sizeLabel && mattress.sizes.includes(sizeLabel)) score += 3;
    }

    // 5. Feature/priority match
    if (sleep_priority && mattress.features.includes(sleep_priority)) score += 3;
    else if (sleep_priority) {
        // partial: if mattress has at least 2 matching features from common ones
        const commonFeatures = ['columna', 'confort', 'durabilidad'];
        if (commonFeatures.includes(sleep_priority) && mattress.features.some(f => commonFeatures.includes(f))) {
            score += 1;
        }
    }

    return score;
}

export function getRecommendations(answers) {
    const scored = MATTRESS_DB.map(m => ({
        ...m,
        score: scoreMatress(m, answers),
    }));
    scored.sort((a, b) => b.score - a.score);
    return scored;
}
