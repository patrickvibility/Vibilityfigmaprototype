import { useState } from 'react';
import { UserPlus, Settings } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { globalPrograms } from '../data/programs';

export function Registration() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [dietChoice, setDietChoice] = useState('');
  const [visibilityCoaching, setVisibilityCoaching] = useState('');
  const [supplementProtocol, setSupplementProtocol] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [showCustomization, setShowCustomization] = useState(false);

  const dietOptions = [
    'Mediterranean',
    'Paleo',
    'Keto',
    'AIP (Autoimmune Protocol)',
    'Low FODMAP',
    'Plant-Based',
    'Standard Elimination Diet',
  ];

  const visibilityCoachingOptions = [
    'In-House 1:1',
    'In-House Group',
    'Vibility 1:1',
    'Vibility Group',
    'No Coaching',
  ];

  const supplementProtocolOptions = [
    'Full Protocol',
    'Essential Supplements Only',
    'Custom Protocol',
    'No Supplements',
  ];

  return (
    <div className="flex-1 bg-[#f8f8fa] overflow-auto">
      <div className="max-w-[900px] mx-auto p-8">
        <div className="mb-8">
          <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] tracking-[-0.84px] mb-2">
            Register New Patient
          </h1>
          <p className="text-[15px] text-[rgba(34,20,46,0.62)]">
            Add a new patient and assign them to a program
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.1)] p-8">
          {/* Patient Information Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <UserPlus className="w-5 h-5 text-[#5e09a9]" />
              <h2 className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                Patient Information
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-[#221b28] mb-2 block">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="Enter first name"
                  className="rounded-lg border-[rgba(0,0,0,0.1)]"
                />
              </div>

              <div>
                <Label htmlFor="lastName" className="text-[#221b28] mb-2 block">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Enter last name"
                  className="rounded-lg border-[rgba(0,0,0,0.1)]"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#221b28] mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="patient@example.com"
                  className="rounded-lg border-[rgba(0,0,0,0.1)]"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-[#221b28] mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="rounded-lg border-[rgba(0,0,0,0.1)]"
                />
              </div>
            </div>
          </div>

          {/* Program Assignment Section */}
          <div className="border-t border-[rgba(0,0,0,0.1)] pt-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <UserPlus className="w-5 h-5 text-[#5e09a9]" />
              <h2 className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                Program Assignment
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="plan" className="text-[#221b28] mb-2 block">
                  Select Plan
                </Label>
                <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                  <SelectTrigger className="w-full rounded-lg border-[rgba(0,0,0,0.1)]">
                    <SelectValue placeholder="Choose a plan..." />
                  </SelectTrigger>
                  <SelectContent>
                    {globalPrograms.map((plan) => (
                      <SelectItem key={plan.id} value={plan.id}>
                        <div className="flex items-center justify-between gap-3 w-full">
                          <span>{plan.name}</span>
                          <Badge variant="secondary" className="text-[10px] ml-2">
                            {plan.duration} weeks
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="startDate" className="text-[#221b28] mb-2 block">
                  Start Date
                </Label>
                <Input
                  id="startDate"
                  type="date"
                  className="rounded-lg border-[rgba(0,0,0,0.1)]"
                />
              </div>
            </div>
          </div>

          {/* Program Customization Section */}
          <div className="border-t border-[rgba(0,0,0,0.1)] pt-8">
            <div className="flex items-center gap-2 mb-6">
              <Settings className="w-5 h-5 text-[#5e09a9]" />
              <h2 className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                Program Customization
              </h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="diet" className="text-[#221b28] mb-2 block">
                    Diet Protocol
                  </Label>
                  <Select value={dietChoice} onValueChange={setDietChoice}>
                    <SelectTrigger className="w-full rounded-lg border-[rgba(0,0,0,0.1)]">
                      <SelectValue placeholder="Select diet protocol..." />
                    </SelectTrigger>
                    <SelectContent>
                      {dietOptions.map((diet) => (
                        <SelectItem key={diet} value={diet}>
                          {diet}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="supplement" className="text-[#221b28] mb-2 block">
                    Supplement Protocol
                  </Label>
                  <Select value={supplementProtocol} onValueChange={setSupplementProtocol}>
                    <SelectTrigger className="w-full rounded-lg border-[rgba(0,0,0,0.1)]">
                      <SelectValue placeholder="Select supplement protocol..." />
                    </SelectTrigger>
                    <SelectContent>
                      {supplementProtocolOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#f8f8fa] rounded-lg border border-[rgba(0,0,0,0.1)]">
                <input
                  type="checkbox"
                  id="fullCustomize"
                  checked={showCustomization}
                  onChange={(e) => setShowCustomization(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-[rgba(0,0,0,0.3)] text-[#5e09a9] focus:ring-[#5e09a9]"
                />
                <div className="flex-1">
                  <Label htmlFor="fullCustomize" className="text-[#221b28] cursor-pointer">
                    Fully customize this plan for patient
                  </Label>
                  <p className="text-[13px] text-[rgba(34,20,46,0.62)] mt-1">
                    Override default plan settings and manually select components, duration, and schedule
                  </p>
                </div>
              </div>

              {showCustomization && (
                <div className="p-4 bg-[rgba(94,9,169,0.05)] rounded-lg border border-[rgba(94,9,169,0.2)]">
                  <p className="text-[13px] text-[#5e09a9] mb-3">
                    You will be redirected to the Plan Builder after registration to customize this patient's plan.
                  </p>
                  <div>
                    <Label htmlFor="customDuration" className="text-[#221b28] mb-2 block text-[13px]">
                      Custom Duration (weeks)
                    </Label>
                    <Input
                      id="customDuration"
                      type="number"
                      min="4"
                      max="16"
                      defaultValue="12"
                      className="rounded-lg border-[rgba(0,0,0,0.1)]"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Vibility Coaching Section */}
          <div className="border-t border-[rgba(0,0,0,0.1)] pt-8">
            <div className="flex items-center gap-2 mb-6">
              <UserPlus className="w-5 h-5 text-[#5e09a9]" />
              <h2 className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                Vibility Coaching
              </h2>
            </div>

            <div>
              <Label htmlFor="visibility" className="text-[#221b28] mb-2 block">
                Coaching Type
              </Label>
              <Select value={visibilityCoaching} onValueChange={setVisibilityCoaching}>
                <SelectTrigger className="w-full rounded-lg border-[rgba(0,0,0,0.1)]">
                  <SelectValue placeholder="Select coaching type..." />
                </SelectTrigger>
                <SelectContent>
                  {visibilityCoachingOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Check Out Section */}
          <div className="border-t border-[rgba(0,0,0,0.1)] pt-8">
            <div className="flex items-center gap-2 mb-6">
              <Settings className="w-5 h-5 text-[#5e09a9]" />
              <h2 className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                Check Out
              </h2>
            </div>

            <div className="bg-[#f8f8fa] rounded-lg border border-[rgba(0,0,0,0.1)] p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(0,0,0,0.1)]">
                  <div>
                    <p className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                      {selectedPlan ? globalPrograms.find(p => p.id === selectedPlan)?.name : 'Selected Plan'}
                    </p>
                    <p className="text-[13px] text-[rgba(34,20,46,0.62)] mt-1">
                      {selectedPlan ? `${globalPrograms.find(p => p.id === selectedPlan)?.duration}-week plan` : '12-week plan'}
                    </p>
                  </div>
                  <p className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                    $1,200.00
                  </p>
                </div>

                {visibilityCoaching && visibilityCoaching !== 'No Coaching' && (
                  <div className="flex items-center justify-between pb-4 border-b border-[rgba(0,0,0,0.1)]">
                    <div>
                      <p className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                        {visibilityCoaching} Coaching
                      </p>
                      <p className="text-[13px] text-[rgba(34,20,46,0.62)] mt-1">
                        12-week duration
                      </p>
                    </div>
                    <p className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                      {visibilityCoaching === 'In-House 1:1' ? '$400.00' : 
                       visibilityCoaching === 'In-House Group' ? '$200.00' : 
                       visibilityCoaching === 'Vibility 1:1' ? '$600.00' : '$800.00'}
                    </p>
                  </div>
                )}

                {supplementProtocol && supplementProtocol !== 'No Supplements' && (
                  <div className="flex items-center justify-between pb-4 border-b border-[rgba(0,0,0,0.1)]">
                    <div>
                      <p className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                        {supplementProtocol}
                      </p>
                      <p className="text-[13px] text-[rgba(34,20,46,0.62)] mt-1">
                        12-week supply
                      </p>
                    </div>
                    <p className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                      {supplementProtocol === 'Full Protocol' ? '$450.00' : supplementProtocol === 'Essential Supplements Only' ? '$250.00' : '$350.00'}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <p className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                    Total
                  </p>
                  <p className="font-['Inter',_sans-serif] font-semibold text-[#5e09a9] tracking-[-0.5px]">
                    ${(() => {
                      let total = 1200;
                      if (visibilityCoaching === 'In-House 1:1') total += 400;
                      if (visibilityCoaching === 'In-House Group') total += 200;
                      if (visibilityCoaching === 'Vibility 1:1') total += 600;
                      if (visibilityCoaching === 'Vibility Group') total += 800;
                      if (supplementProtocol === 'Full Protocol') total += 450;
                      if (supplementProtocol === 'Essential Supplements Only') total += 250;
                      if (supplementProtocol === 'Custom Protocol') total += 350;
                      return total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                    })()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 mt-8 pt-8 border-t border-[rgba(0,0,0,0.1)]">
            <Button
              variant="outline"
              className="rounded-[18px] px-6 border-[rgba(0,0,0,0.1)] hover:bg-[rgba(85,37,126,0.05)]"
            >
              Cancel
            </Button>
            <Button
              className="bg-[#5e09a9] hover:bg-[#4a0787] text-white rounded-[18px] px-8"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Register Patient
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
