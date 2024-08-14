import EventForm from "@/components/shared/EventForm";
import { useAuth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { userId } = useAuth();

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
        {userId ? (
          <EventForm userId={userId} type="Create" />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default CreateEvent;
