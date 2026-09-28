import { agentConfig } from '../data/agentConfig';

/**
 * Generates and triggers download of a standardized .vcf (vCard 3.0) file
 * containing Sruthy's complete contact details.
 */
export function downloadVCard(): void {
  const vcardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:;${agentConfig.name};;;`,
    `FN:${agentConfig.name}`,
    `ORG:${agentConfig.agencyTitle}`,
    `TITLE:${agentConfig.designation}`,
    `TEL;TYPE=CELL,VOICE:${agentConfig.phones.primary}`,
    `TEL;TYPE=WORK,VOICE:${agentConfig.phones.secondary}`,
    `EMAIL;TYPE=INTERNET,PREF:${agentConfig.email}`,
    `ADR;TYPE=WORK:;;${agentConfig.location.address};${agentConfig.location.city};${agentConfig.location.state};;`,
    `NOTE:Private Insurance Advisor & Financial Protection Consultant. Dedicated guidance for Term, Health, Life, and Claims.`,
    `URL:${window.location.origin}`,
    'END:VCARD',
  ].join('\r\n');

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `Sruthy_Insurance_Advisor.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
