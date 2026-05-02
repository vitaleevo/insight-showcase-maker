import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Loader2, ShieldCheck } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Validation schema — protects against injection, abuse and oversized payloads
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome deve ter menos de 100 caracteres" })
    .regex(/^[\p{L}\s'.-]+$/u, { message: "Nome contém caracteres inválidos" }),
  company: z
    .string()
    .trim()
    .max(150, { message: "Nome da empresa muito longo" })
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "Email muito longo" }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Telefone muito longo" })
    .regex(/^[+\d\s()-]*$/, { message: "Telefone contém caracteres inválidos" })
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .max(50)
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" })
    .max(1000, { message: "A mensagem deve ter menos de 1000 caracteres" }),
  // Honeypot — must remain empty (bots fill it)
  website: z.string().max(0, { message: "Spam detectado" }).optional().or(z.literal("")),
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [lastSubmit, setLastSubmit] = useState(0);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Escritório Sede",
      details: ["Av. 4 de fevereiro, prédio nº23, 3º Andar", "( Junto ao porto de luanda )"],
    },
    {
      icon: Phone,
      title: "Telefones",
      details: ["(+244) 928 867 132", "(+244) 923 276 552"],
    },
    { icon: Mail, title: "Email", details: ["info@almafrans.com"] },
    { icon: Clock, title: "Horário", details: ["Segunda a Sexta", "08:00 - 17:00"] },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Rate limit — 1 submit per 10s
    const now = Date.now();
    if (now - lastSubmit < 10_000) {
      toast({
        title: "Aguarde um momento",
        description: "Por favor, aguarde antes de enviar outra mensagem.",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData(e.currentTarget);
    const raw: Record<string, string> = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    const result = contactSchema.safeParse(raw);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      toast({
        title: "Verifique o formulário",
        description: "Existem campos com informações inválidas.",
        variant: "destructive",
      });
      return;
    }

    setErrors({});
    setSubmitting(true);
    setLastSubmit(now);

    // Simulated submission — replace with backend / edge function when available
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Mensagem enviada com sucesso",
        description: "A nossa equipa entrará em contacto consigo brevemente.",
      });
    }, 800);
  };

  const inputCls = (field: keyof ContactFormData) =>
    `bg-muted border-border focus:border-primary ${
      errors[field] ? "border-destructive focus:border-destructive" : ""
    }`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Contacte-nos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Vamos Trabalhar <span className="text-gradient-primary">Juntos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contacto connosco para saber mais sobre os nossos serviços ou para solicitar um
            orçamento personalizado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="gradient-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-lg mb-2 text-foreground">
                    {info.title}
                  </h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            <div className="gradient-card rounded-2xl p-8 border border-border">
              <h4 className="font-display font-bold text-xl mb-4 text-foreground">Certificações</h4>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 px-4 py-2 bg-muted rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">ISO</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">ISO 9001</p>
                    <p className="text-xs text-muted-foreground">Certificado</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-muted rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">ANAB</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">ANAB</p>
                    <p className="text-xs text-muted-foreground">Acreditado</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="gradient-card rounded-2xl p-8 md:p-10 border border-border">
              <h3 className="font-display font-bold text-2xl mb-2 text-foreground">
                Envie-nos uma Mensagem
              </h3>
              <p className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Os seus dados são protegidos e nunca partilhados com terceiros.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                {/* Honeypot — hidden from real users */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      maxLength={100}
                      autoComplete="name"
                      required
                      className={inputCls("name")}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Nome da empresa"
                      maxLength={150}
                      autoComplete="organization"
                      className={inputCls("company")}
                    />
                    {errors.company && (
                      <p className="text-xs text-destructive mt-1">{errors.company}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      maxLength={255}
                      autoComplete="email"
                      required
                      className={inputCls("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+244 XXX XXX XXX"
                      maxLength={30}
                      autoComplete="tel"
                      className={inputCls("phone")}
                    />
                    {errors.phone && (
                      <p className="text-xs text-destructive mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="maritime">Segurança Marítima</option>
                    <option value="fire">Combate a Incêndio</option>
                    <option value="epi">Fornecimento de EPI's</option>
                    <option value="cylinders">Manutenção de Cilindros</option>
                    <option value="gases">Gases Medicinais/Industriais</option>
                    <option value="warehouse">Gestão de Armazém</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Descreva o que precisa..."
                    rows={4}
                    maxLength={1000}
                    required
                    className={`${inputCls("message")} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full shadow-button group rounded-full"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      A enviar...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
