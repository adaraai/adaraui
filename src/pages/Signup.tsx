import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Github, Mail } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

export default function Signup() {
  const [tab, setTab] = useState("client");
  const navigate = useNavigate();

  function handleTabChange(value) {
    setTab(value);
  }

  function handleClientSignup(e) {
    e.preventDefault();
    navigate("/client-dashboard");
  }

  function handleLabelerSignup(e) {
    e.preventDefault();
    navigate("/labeler-dashboard");
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Back Button */}
        {/* Removed the Back to home link */}

        {/* Signup Form */}
        <Card>
          <CardHeader className="space-y-1">
            <CardDescription className="text-center">
              Create your account to get started
            </CardDescription>
            <CardTitle className="text-2xl font-light text-center">Join ADARA AI Lab</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="client" className="w-full" onValueChange={handleTabChange}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="client">Client</TabsTrigger>
                <TabsTrigger value="labeler">Labeler</TabsTrigger>
              </TabsList>
              
              <TabsContent value="client" className="space-y-4 mt-6">
                <form onSubmit={handleClientSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-email">Email</Label>
                    <Input id="client-email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-password">Password</Label>
                    <Input id="client-password" type="password" placeholder="Create a password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" placeholder="Confirm your password" />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-primary hover:bg-primary/90">
                    Create Client Account
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="labeler" className="space-y-4 mt-6">
                <form onSubmit={handleLabelerSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="First name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="labeler-email">Email</Label>
                    <Input id="labeler-email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="Select your country" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="labeler-password">Password</Label>
                    <Input id="labeler-password" type="password" placeholder="Create a password" />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-primary hover:bg-primary/90">
                    Create Labeler Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
            
            <div className="text-center text-sm mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}