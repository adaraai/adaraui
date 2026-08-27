import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/client/Header";
import { Footer } from "@/components/client/Footer";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function RequestQuota() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    industry: "",
    projectType: "",
    estimatedVolume: "",
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.companyName) newErrors.companyName = "Company name is required";
    if (!formData.contactName) newErrors.contactName = "Contact name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.industry) newErrors.industry = "Industry is required";
    if (!formData.projectType) newErrors.projectType = "Project type is required";
    if (!formData.estimatedVolume) newErrors.estimatedVolume = "Estimated volume is required";
    if (!formData.description) newErrors.description = "Project description is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log("Quota request submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 pb-8">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                  <h2 className="text-2xl font-bold text-foreground">Request Submitted!</h2>
                  <p className="text-muted-foreground">
                    Thank you for your quota request. Our team will review your requirements and get back to you within 24-48 hours.
                  </p>
                  <div className="pt-4 space-x-4">
                    <Link to="/">
                      <Button variant="outline">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button>
                        Contact Support
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 pb-8">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Request Custom Quota</h1>
              <p className="text-muted-foreground">
                Tell us about your project requirements and we'll provide you with a custom quote tailored to your needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 overflow-hidden">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Information</CardTitle>
                    <CardDescription>
                      Please provide details about your project and requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name *</Label>
                          <Input
                            id="companyName"
                            value={formData.companyName}
                            onChange={(e) => handleInputChange("companyName", e.target.value)}
                            placeholder="Enter your company name"
                            required
                            className={errors.companyName ? "border-red-500" : ""}
                          />
                          {errors.companyName && (
                            <p className="text-sm text-red-500">{errors.companyName}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contactName">Contact Name *</Label>
                          <Input
                            id="contactName"
                            value={formData.contactName}
                            onChange={(e) => handleInputChange("contactName", e.target.value)}
                            placeholder="Your full name"
                            required
                            className={errors.contactName ? "border-red-500" : ""}
                          />
                          {errors.contactName && (
                            <p className="text-sm text-red-500">{errors.contactName}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your.email@company.com"
                            required
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-sm text-red-500">{errors.email}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry *</Label>
                          <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)} required>
                            <SelectTrigger id="industry" className={`w-full ${errors.industry ? "border-red-500" : ""}`}>
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                            <SelectContent position="popper" sideOffset={4} className="z-[9999] bg-background border shadow-lg">
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="retail">Retail & E-commerce</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="automotive">Automotive</SelectItem>
                              <SelectItem value="agriculture">Agriculture</SelectItem>
                              <SelectItem value="government">Government</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.industry && (
                            <p className="text-sm text-red-500">{errors.industry}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="projectType">Project Type *</Label>
                          <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)} required>
                            <SelectTrigger id="projectType" className={`w-full ${errors.projectType ? "border-red-500" : ""}`}>
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent position="popper" sideOffset={4} className="z-[9999] bg-background border shadow-lg">
                              <SelectItem value="image-labeling">Image Labeling</SelectItem>
                              <SelectItem value="text-classification">Text Classification</SelectItem>
                              <SelectItem value="data-annotation">Data Annotation</SelectItem>
                              <SelectItem value="sentiment-analysis">Sentiment Analysis</SelectItem>
                              <SelectItem value="object-detection">Object Detection</SelectItem>
                              <SelectItem value="custom">Custom Project</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.projectType && (
                            <p className="text-sm text-red-500">{errors.projectType}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="estimatedVolume">Estimated Volume *</Label>
                        <Select value={formData.estimatedVolume} onValueChange={(value) => handleInputChange("estimatedVolume", value)} required>
                          <SelectTrigger id="estimatedVolume" className={`w-full ${errors.estimatedVolume ? "border-red-500" : ""}`}>
                            <SelectValue placeholder="Select estimated volume" />
                          </SelectTrigger>
                          <SelectContent position="popper" sideOffset={4} className="z-[9999] bg-background border shadow-lg">
                            <SelectItem value="1k-10k">1,000 - 10,000 items</SelectItem>
                            <SelectItem value="10k-50k">10,000 - 50,000 items</SelectItem>
                            <SelectItem value="50k-100k">50,000 - 100,000 items</SelectItem>
                            <SelectItem value="100k-500k">100,000 - 500,000 items</SelectItem>
                            <SelectItem value="500k-1m">500,000 - 1,000,000 items</SelectItem>
                            <SelectItem value="1m+">1,000,000+ items</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.estimatedVolume && (
                          <p className="text-sm text-red-500">{errors.estimatedVolume}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Project Description *</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => handleInputChange("description", e.target.value)}
                          placeholder="Please describe your project requirements, specific needs, timeline, and any other relevant details..."
                          rows={6}
                          required
                          className={errors.description ? "border-red-500" : ""}
                        />
                        {errors.description && (
                          <p className="text-sm text-red-500">{errors.description}</p>
                        )}
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="h-4 w-4 mr-2" />
                        Submit Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6 lg:col-span-1 overflow-hidden">
                <Card>
                  <CardHeader>
                    <CardTitle>Why Choose Labilo?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium">High Quality</h4>
                        <p className="text-sm text-muted-foreground">99.9% accuracy guaranteed with our expert labelers</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium">Fast Turnaround</h4>
                        <p className="text-sm text-muted-foreground">Quick delivery with scalable workforce</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium">Cost Effective</h4>
                        <p className="text-sm text-muted-foreground">Competitive pricing for enterprise solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium">24/7 Support</h4>
                        <p className="text-sm text-muted-foreground">Dedicated account management</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Need Immediate Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Can't wait for a custom quote? Contact our sales team directly.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Email: sales@labiloafrica.ai</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Phone: +1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Live Chat Available</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 